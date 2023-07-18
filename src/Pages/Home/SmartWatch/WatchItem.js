import React from 'react';

const WatchItem = ({data}) => {
    const{name,img} =data;
    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-4xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" style={{width: '80%', height:'20%'}} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default WatchItem;