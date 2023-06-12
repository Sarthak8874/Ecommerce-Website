import React from "react";

function Cart() {
  return (
    <>
      <div className="cartpage">
        <section id="cart" class="section-p1">
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
              <tr>
                <td>
                  <a href="#">
                    <i class="fa-solid fa-circle-minus"></i>
                  </a>
                </td>
                <td>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    srcset=""
                  />
                </td>
                <td>Cartoon Astronaut T-shirts</td>
                <td>$118.19</td>
                <td>
                  <input type="number" value="1" className="border border-solid border-black p-1"/>
                </td>
                <td>$118.19</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="cart-add" class="section-p1">
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
                <td>$ 355</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>$ 355</strong>
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