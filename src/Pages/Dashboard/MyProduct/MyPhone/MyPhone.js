import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../../Shared/ConfirmModal/ConfirmModal';

const MyPhone = () => {
    const {user} = useContext(AuthContext);

    const [deleteUser, setDeleteUser] = useState(null);
    const url =`http://localhost:5000/phoneCollections?email=${user?.email}`;

    const closeModal = () =>{
        setDeleteUser(null);
    }
    

    const {data: phones =[], isLoading, refetch} = useQuery({
        queryKey: ['phones'],
        queryFn: async () =>{
            try{
                const res = await fetch(url);
                const data = await res.json();
                return data;
            }
            catch{

            }      
        }
    });

    if(isLoading)
    {
        return <Loading></Loading>
    }

    const handleDelete = (user) =>{
        fetch(`http://localhost:5000/emailusers/${user._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 )
            {
                toast.success(`${user.name} deleted successfully.`);
                refetch();
            }
        })
    }

    return (
        <div className='ml-5'>
            <div className="overflow-x-auto">
                <table className="table bg-emerald-300">
                    
                    <thead>
                        <tr >
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            phones &&
                            phones.map((user,i) =>
                            <tr key={user._id}>
                                <th>{i+1}</th>
                                <td> 
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={user?.photo} alt="phones-photos"/>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.sellerEmail}</td>

                                <td>
                                    <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are you sure that you want to delete?`}
                    message={`If you want to delete Mr. ${deleteUser.name}.It can not be recover.`}
                    successAction={handleDelete}
                    successButtonName='Delete'
                    modalData={deleteUser}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyPhone;