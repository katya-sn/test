import React, { createContext, useEffect, useReducer } from 'react';
import { CartBook } from '../types/cartItem';

type Action =
  | { type: 'ADD_TO_CART'; payload: CartBook }
  | { type: 'REMOVE_FROM_CART'; payload: CartBook }
  | { type: 'UPDATE_AMOUNT'; payload: CartBook[] };

type CartContextType = {
  cartList: CartBook[];
  cartDispatch: React.Dispatch<Action>;
};

const reducer = (state: CartContextType, action: Action): CartContextType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartList: state.cartList.filter(item => item.id !== action.payload.id),
      };

    case 'UPDATE_AMOUNT':
      return {
        ...state,
        cartList: action.payload,
      };
  }
};

export const CartContext = createContext<CartContextType>({
  cartList: [],
  cartDispatch: () => {},
});

type Props = {
  children: React.ReactNode;
};

const savedCartList = localStorage.getItem('cartList');
const initialCartList = savedCartList ? JSON.parse(savedCartList) : [];

const initialState: CartContextType = {
  cartList: initialCartList,
  cartDispatch: () => {},
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, cartDispatch] = useReducer(reducer, initialState);

  const { cartList } = state;

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [cartList]);

  const value = {
    cartList,
    cartDispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};