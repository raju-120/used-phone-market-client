import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmModal/ConfirmModal';
import { AuthContext } from '../../../Context/AuthProvider';

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
            <h2 className="text-3xl mb-5 bg-red-400 p-5 rounded-xl">My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table bg-cyan-200">
                    
                    <thead>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Work</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            phones &&
                            phones.map((user,i) =>
                            <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

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