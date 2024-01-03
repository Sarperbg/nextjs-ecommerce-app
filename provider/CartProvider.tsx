import { CardContextProvider } from "@/hooks/useCart"

const CartProvider = ({ children }: { children: React.ReactNode }) => {
 return (
  <CardContextProvider>
   {children}
  </CardContextProvider>
 )
}

export default CartProvider