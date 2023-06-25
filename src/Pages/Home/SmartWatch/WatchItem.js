import React from 'react';

const WatchItem = ({watchService}) => {
    const{name,photo,price} =watchService;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" style={{width: '30%', height:'20%'}} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>price: <span className='font-bold'>{price}</span> Tk</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchItem;