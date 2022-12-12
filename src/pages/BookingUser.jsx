
import "../styles/BookingUser.css"
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context";


 function BookingUser(){

    
  //Informações que vem da API
  const { bookingsUser } = useContext(Context);
  console.log("Bookings", bookingsUser)
  const id = localStorage.getItem('userID');

  const selectedBookings = bookingsUser?.filter((bookings) =>  bookings.user.id == id);

    console.log("ID:", id)
   console.log("Bookings Users", selectedBookings)
    return(
        <>
        <div className="bookings_cards">
            {selectedBookings?.map((userBooking) => (
                 <div key={userBooking.id} >

                <p>
                {userBooking.id}
                </p>

                <p>
                {userBooking.initialTime}
                </p>

                <p>
                {userBooking.initalDay}
                </p>

                <p>
                {userBooking.finalDay}
                </p>

                </div>
            ))}

           
        </div>

        </>
    )
   
    
}

export default BookingUser;
