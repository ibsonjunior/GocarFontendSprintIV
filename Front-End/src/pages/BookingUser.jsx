import "../styles/BookingUser.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/Context";

function BookingUser() {
  //Informações que vem da API
  const { productBookings, products } = useContext(Context);

  const id = localStorage.getItem("userID");

  const selectedBookings = productBookings?.filter(
    (bookings) => bookings.user.id == id
  );

  const selectedProduct = selectedBookings?.map((product) => {
    return {
      ...product,
      productName: products?.find(
        (nameProduct) => nameProduct.id == product.product.id
      ),
    };
  });

  return (
    <>
      <div className="bookings_cards">
        <h1>S U A S &nbsp; R E S E R V A S</h1>

        <div id="galeria_carro" className="galeria_carro5 bookingGaleria ">
          {selectedBookings?.map((userBooking) => (
            <div key={userBooking.id} className="card_main1">
              <div className="card_image1">
                <h4>{userBooking.product.name}</h4>
                <div className="alinharbook">
                  <h5>Horário :&nbsp;</h5>
                  {userBooking.initialTime}
                </div>

                <div className="alinharbook">
                  <h5>Check-in :&nbsp;</h5>
                  {userBooking.initalDay}
                </div>

                <div className="alinharbook">
                  <h5>Check-out :&nbsp;</h5>
                  {userBooking.finalDay}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookingUser;
