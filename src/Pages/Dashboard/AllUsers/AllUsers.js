import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const {data: emailusers =[]} = useQuery({
        queryKey: ['emailusers'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/emailusers');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='ml-5'>
            <h2 className="text-3xl mb-5">My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emailusers &&
                            emailusers.map((user,i) =>
                            <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='btn btn-sm btn-warning p-2'>Delete</td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;