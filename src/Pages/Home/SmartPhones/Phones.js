import React from 'react';

const Phones = ({phoneData}) => {
    const{name,img} = phoneData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Smart Phone" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
{/*                     <p>Price: <span className='font-bold'>{price}</span> Tk</p> 
                    <div className="card-actions">
                        <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default Phones;