import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Info</p>
                <div className="multi-feilds">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="email address" />
                <input type="text" placeholder="street" />
                <div className="multi-feilds">
                    <input type="text" placeholder="city" />
                    <input type="text" placeholder="state" />
                </div>
                <div className="multi-feilds">
                    <input type="text" placeholder="zip code" />
                    <input type="text" placeholder="country" />
                </div>
                <input type="text" placeholder="phone" />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>delivery</p>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            {getTotalCartAmount() + 2}
                        </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
