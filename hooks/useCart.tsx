"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { products } from "@/utils/Products";
import { createContext, useCallback, useContext, useState } from "react";

interface CartContextProps {
 productCartQty: number
 addToBasket: (product: CardProductProps) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
 [propName: string]: any
}

export const CardContextProvider = (props: Props) => {
 const [productCartQty, setProductCartQty] = useState(0)
 const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null)

 const addToBasket = useCallback((product: CardProductProps) => {
  setCartPrdcts(prev => {
   let updatedCart;
    if(prev){
     updatedCart = [...prev, product]
    } else {
    updatedCart = [product]
   }
   return updatedCart
  })
 }, [cartPrdcts])

 let value = {
  productCartQty,
  addToBasket,
  cartPrdcts
 }
 return (
  <CartContext.Provider value={value} {...props} />
 )
}


const useCart = () => {
 const context = useContext(CartContext)
 if (context == null) {
  throw new Error('Bir hata durumu mevcut')
 }
 return context
}
export default useCart