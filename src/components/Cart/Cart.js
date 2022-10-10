import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveItem}) => {
        let message;
        if(cart.length===0){
            message=<p>please buy at least one item</p>
        }
        else if(cart.length===1){
            message= <div>
                <p>amar ekta nao</p>
                <p>tomar jonno ekta nao</p>
            </div>
        }

        else{
            message= <p>Thanks for buying</p>
        }

    return (
        <div className={cart.length===2?`purple`:'tomato'}> 
            <h3>this is ordr summaary</h3>
            <h3>order quantity:{cart.length}</h3>
     {
        cart.map(tshirt => 
        <p key={tshirt._id}
        >
            Name:     {tshirt.name}
            <button onClick={()=>handleRemoveItem(tshirt)}>X</button>

        </p>)
     }

     {
        message
     }

     {cart.length ===3 ? <p>tin jon ke gift korba?</p>:<p>kino kino</p>}

     {cart.length===2 && <h2> double item</h2>}

     {cart.length ===4 || <h3>4 ta na </h3>}
    
        </div>

        

    );
};

export default Cart;