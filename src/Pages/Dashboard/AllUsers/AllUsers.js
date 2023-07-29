import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmModal/ConfirmModal';

const AllUsers = () => {

    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () =>{
        setDeleteUser(null);
    }
    

    const {data: emailusers =[], isLoading, refetch} = useQuery({
        queryKey: ['emailusers'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/emailusers',{
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
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


    const handleMakeAdmin = (id) =>{
        fetch(`http://localhost:5000/emailusers/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0 )
            {
                toast.success(`Make admin successfully`);
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
                            emailusers &&
                            emailusers.map((user,i) =>
                            <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td> 
                                    {
                                        user?.role !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-primary'>Make Admin</button> 
                                    }
                                </td>

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

export default AllUsers;