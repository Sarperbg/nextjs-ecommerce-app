"use client"

import useCart from "@/hooks/useCart"
import PageContainer from "../containers/PageContainer"
import Image from "next/image";
import Button from "../general/Button";


const CartClient = () => {
 const { cartPrdcts } = useCart();
 if (!cartPrdcts || cartPrdcts.length == 0) {
  return <div>Sepetinizde ürün bulunmamaktadır...</div>
 }

 return (
  <div className="my-3 md:my-10">
   <PageContainer>
    <div className="flex items-center gap-3 text-center border-b py-3">
     <div className="w-1/5">Ürün Resmi</div>
     <div className="w-1/5">Ürün Adı</div>
     <div className="w-1/5">Ürün Miktarı</div>
     <div className="w-1/5">Ürün Fiyatı</div>
     <div className="w-1/5"></div>
    </div>
    <div>
     {
      cartPrdcts.map((cart => (
       <div className="flex items-center justify-between text-center" key={cart.id}>
        <div className="w-1/5 flex items-center justify-center my-5">
         <Image src={cart.image} width={40} height={40} alt="" />
        </div>
        <div className="w-1/5">{cart.name}</div>
        <div className="w-1/5">2</div>
        <div className="w-1/5 text-orange-600 text-lg">{cart.price} €</div>
        <div className="w-1/5">
         <Button text="Ürünü Sil" small deleteBtn onClick={() => { }}/>
        </div>
       </div>
      )))
     }
    </div>
   </PageContainer>
  </div>
 )
}

export default CartClient