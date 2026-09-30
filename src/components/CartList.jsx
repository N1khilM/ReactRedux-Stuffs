import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  deleteCartItem,
} from "../features/ProductSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);

  // Total number of items
  // Individual item total
  // Cart subtotal
  // Final total

  const totalItems = cart.reduce((acc, c) => acc + c.quantity, 0);
  const finalTotal = cart.reduce((acc, c) => acc + c.price * c.quantity, 0);

  return (
    <div>
      <b>CARTS</b>
      <p>Total items in Cart: {cart.length}</p>

      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.length === 0
          ? "cart is Empty"
          : cart.map((c) => (
              <div
                key={c.id}
                style={{ border: "1px solid #ccc", padding: "10px" }}
              >
                <img
                  src={c.thumbnail}
                  alt="img of product"
                  style={{
                    objectFit: "contain",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <p>Title: {c.title}</p>
                <p>Price: ${c.price}</p>
                <p>Category: {c.category}</p>
                <p>Quantity: {c.quantity}</p>
                <button onClick={() => dispatch(increaseQuantity(c.id))}>
                  +
                </button>

                <button onClick={() => dispatch(decreaseQuantity(c.id))}>
                  -
                </button>
                <button onClick={() => dispatch(deleteCartItem(c.id))}>
                  Delete
                </button>
                <p>Individual Item Price : ${c.price}</p>
                <p>Sub Total:{c.price * c.quantity}</p>
              </div>
            ))}
      </div>
      <p>
        <b>Total items to be bought :</b> {totalItems}
      </p>
      <p>
        <b>Final Total:</b> {finalTotal}
      </p>
    </div>
  );
};

export default CartList;
