import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmModal/ConfirmModal';
import { toast } from 'react-hot-toast';

const ComplainBox = () => {

    const [reportDelete, setReportDelete] = useState(null);

    const closeModal=() =>{
        setReportDelete(null);
    }

    const {data: complains=[],isLoading,refetch } = useQuery({
        queryKey: ['complains'],
        queryFn: async () =>{
            try{

                const res = await fetch('http://localhost:5000/complains',{
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
        
    })
    if(isLoading)
    {
        return <Loading></Loading>
    }

    const handleDeleteReport = (complain) =>{
        fetch(`http://localhost:5000/complains/${complain._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0)
            {
                toast.success(`${complain.email} complain has been deleted successfully.`);
                refetch();
            }
        })
    }
    return (
        <div className='ml-5'>
            <h2 className="text-3xl mb-5 bg-cyan-400 p-5 rounded-xl">All The Complain</h2>
            <div className="overflow-x-auto">
                <table className="table bg-cyan-200">
                    
                    <thead>
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            complains &&
                            complains.map((complain,i) =>
                                <tr key={complain._id}>
                                    <th>{i+1}</th>
                                    <td>{complain.userName}</td>
                                    <td>{complain.email}</td>
                                    <td>{complain.report}</td>
                                    <td>
                                        <label onClick={() => setReportDelete(complain)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                reportDelete &&
                <ConfirmationModal
                    title={`Are you sure that, You want delete this complain?`}
                    message={`If you delete Mr/Mrs. ${reportDelete?.userName} complain then, it won't be able to recover.`}
                    successAction={handleDeleteReport}
                    successButtonName='Delete'
                    modalData={reportDelete}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ComplainBox;