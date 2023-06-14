import React, { useReducer } from "react";
import CartContext from "./CartContext";
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "Changeqty":
      if (action.qty <= 0) {
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
      }
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, qty: action.qty };
          } else {
            return c;
          }
        }),
      };
    default:
      return state;
  }
};

const CartReducer = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, { cart: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartReducer;
