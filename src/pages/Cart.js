import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.qty), 0)
    );
  }, [cart]);
  document.title = "ShopSmart-Cart";
  return (
    <>
      <div className="cartpage">
        <section id="cart" className="section-p1">
          <table width="100%">
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <p className="text-center m-5">
                  <b>
                    No products added to the cart. Please add some products.
                  </b>
                </p>
              ) : (
                cart.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <RemoveCircleOutlineIcon
                            onClick={() => {
                              dispatch({ type: "REMOVE", payload: item });
                            }}
                          ></RemoveCircleOutlineIcon>
                        </td>
                        <td>
                          <img src={item.thumbnail} alt="" srcset="" />
                        </td>
                        <td>
                          {" "}
                          {item.title.length > 20
                            ? item.title.substr(0, 20) + "..."
                            : item.title}
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <input
                            type="number"
                            value={item.qty}
                            onChange={(e) => {
                              dispatch({
                                type: "Changeqty",
                                payload: item,
                                qty: e.target.value,
                              });
                            }}
                            className="border border-solid border-black p-1"
                          />
                        </td>
                        <td>${item.price * item.qty}</td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </table>
        </section>
        <section id="cart-add" className="section-p1">
          <div id="coupon">
            <h3 className="text-xl font-bold text-gray-800">Apply Coupon</h3>
            <div>
              <input type="text" placeholder="Enter Your Coupon" />
              <button> Apply </button>
            </div>
          </div>
          <div id="subtotal">
            <h3 className="text-xl font-bold text-gray-800">Cart Totals</h3>
            <table>
              <tr>
                <td>Cart Subtotal</td>
                <td>$ {total}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>$ {total * 0.9}</strong>
                </td>
              </tr>
            </table>
            <button>Proceed to Checkout</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
