import React, { createContext, useContext, useReducer } from "react";

const CartState = createContext();
const CartDispatch = createContext();

const reducer = (state, action) => {
  let {cart, user_type, user_id} = state;

  switch (action.type) {

    case "ADD":
      cart = [...state.cart, action.item];
      return {cart, user_id, user_type};

    case "REMOVE":
      const res = cart.filter((c) => c.name !== action.name);
      return {
        cart:res, user_id, user_type
      };

    case "CLEAR":
      cart = [];
      console.log(cart);
      return {
        cart, user_id, user_type
      };

    case "INCREMENT":
      cart.map ((item, idx) => { 
        if (item.name === action.name){

          console.log(item.quantity);
          cart[idx].quantity += 1;
        }})
        console.log(cart);    
      return {
        cart,
        user_id,
        user_type
      };

      case "DECREMENT":
      cart.map ((item, idx) => { 
        if (item.name === action.name && item.quantity > 1){
          const ivar = item.quantity - 1;
          cart[idx].quantity = ivar;
        }})
        console.log(cart);    
      return {
        cart,
        user_id,
        user_type
      };  

    default:
      throw new Error(`${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [{
      quantity: 1,
      name: 'p1',
      price:0,
      category:null,
      image:'',
    }],  
    user_type: null,
    user_id: null,
  });
  // const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatch.Provider value={dispatch}>
      <CartState.Provider value={state}>{children}</CartState.Provider>
    </CartDispatch.Provider>
  );
};

export const useCart = () => useContext(CartState);
export const useDispatchCart = () => useContext(CartDispatch);
