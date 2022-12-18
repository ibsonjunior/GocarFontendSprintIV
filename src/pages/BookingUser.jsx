
import "../styles/BookingUser.css"
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context";


 function BookingUser(){

    
  //Informações que vem da API
  const { productBookings, products } = useContext(Context);
  console.log("Bookings", productBookings)
  const id = localStorage.getItem('userID');

   const selectedBookings = productBookings?.filter((bookings) =>  bookings.user.id == id);

   const selectedProduct = selectedBookings?.map((product) =>{
    return{
        ...product,
        productName: products?.find((nameProduct) => nameProduct.id == product.product.id)
        
    }
   })

   console.log("Product", selectedProduct);
// const selectedBookings = bookingsUser?.filter((bookings) =>  {
//     if(bookings.user.id == id){
//     return bookings.id
// }

// });

// console.log("Oiiiii", selectedBookings)

// const selectedProducts= products?.filter((bookings) =>  bookings.user.id == id);

    console.log("ID:", id)
    console.log("Bookings Users", selectedBookings)
    return(
        <>
        <div className="bookings_cards" >
            <h1>Suas Reservas</h1>
            <div id="galeria_carro" className="galeria_carro bookingGaleria">
                {selectedBookings?.map((userBooking) => (
                    <div key={userBooking.id} className="card_main">
                        <div className="card_image">
                            {" "}
                            
                            <p> 
                            Código da Reserva: 
                            {userBooking.id}
                            </p>

                            <p>
                            Horário da Reserva:
                            {userBooking.initialTime}
                            </p>

                            <p>
                            Data de Inicio da Reserva:
                            {userBooking.initalDay}
                            </p>

                            <p>
                            Data do Fim da Reserva:
                            {userBooking.finalDay}
                            </p>
                
                        </div>
            
                    </div>
                ))}

            
            </div>
        </div>
        

        </>
    )
   
    
}

export default BookingUser;