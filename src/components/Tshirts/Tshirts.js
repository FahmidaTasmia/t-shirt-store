import React from 'react';

const Tshirts = ({tshirt}) => {
    const {name, picture,price}=tshirt;
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <button>Buy this</button>
        </div>
    );
};

export default Tshirts;