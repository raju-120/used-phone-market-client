import React from 'react';

const TabItem = ({tab}) => {
    const {name, img} = tab;
    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-4xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Tablet" style={{width: '80%'}} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default TabItem;