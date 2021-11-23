import React, { createContext, useContext, useReducer } from "react";

const CartState = createContext();
const CartDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    case "REMOVE":
      const newArr = [...state];
      const res = newArr.filter((c, idx) => idx !== action.idx);
      return res;

    case "CLEAR":
      const arr = [];
      return arr;

    // case "INCREMENT":
    //   const narr = [...state];
    //   const r = narr.map((c, idx) => {
    //     if(idx === action.idx){
    //       qty = qty+1;
    //     }
    //   })
    //   return r;

    // case "DECREMENT":
    //   const darr = [...state];
    //   const re = darr.map((c, idx) => {
    //     if(idx === action.idx){
    //       qty = qty+1;
    //     }
    //   })
    //   return r;

    default:
      throw new Error(`${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatch.Provider value={dispatch}>
      <CartState.Provider value={state}>{children}</CartState.Provider>
    </CartDispatch.Provider>
  );
};

export const useCart = () => useContext(CartState);
export const useDispatchCart = () => useContext(CartDispatch);
