import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../../Shared/ConfirmModal/ConfirmModal';

const MyTablet = () => {

    const {user} = useContext(AuthContext);

    const [deleteProduct, setDeleteProduct] = useState(null);

    const closeModal = () =>{
        setDeleteProduct(null);
    }
    

    const {data:phoneResults =[], refetch, isLoading} = useQuery({
        queryKey: ['phoneCollections'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/tabCollections?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading)
    {
        return <Loading></Loading>
    }

    const handleDelete = (results) =>{
        console.log(results);
       fetch(`http://localhost:5000/tabCollections/result/${results._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0 )
            {
                toast.success(`${results.name} deleted successfully.`);
                refetch();
            }
        }) 
    }

    return (
        <div className='ml-5 mb-10'>
            <div className="overflow-x-auto">
                <table className="table bg-emerald-300">
                    
                    <thead>
                        <tr >
                            <th>SL</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            phoneResults?.results?.map((result,i) =>
                                <tr className="hover"
                                    key={result._id}>
                                    <th>{i+1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={result.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{result.name}</td>
                                    <td>{result.sellerEmail}</td>
                                    <td>
                                        <label onClick={() => setDeleteProduct(result)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Are you sure that, you want to delete?`}
                    message={`If you want to delete  ${deleteProduct?.name}.It can not be recover in future.`}
                    successAction={handleDelete}
                    successButtonName='Delete'
                    modalData={deleteProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }  
        </div>
    );
};

export default MyTablet;