import React from "react";

import ContextProvider from "../Context/Context";

import SecondaryHeader from "../components/Headers/Header_Secondary";
import MainHeader from "../components/Headers/Header_Main";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Booking from "../pages/Booking";
import BookingDone from "../pages/BookingDone";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Footer from "../components/Footer";
import PginaAdm from "../pages/Administration";
import BookingUser from "../pages/BookingUser";
import CarPost from "../pages/carPost";
import AdministrationImagem from "../pages/AdministrationImg";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteList = () => {
  const usuarioLogado = localStorage.getItem("token");

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <header>
            {usuarioLogado ? (
              <SecondaryHeader />
            ) : (
              <MainHeader />
            )}
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/:id/reserve" element={<Booking />} />
            <Route path="/reserve-done" element={<BookingDone />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<PginaAdm />} />
            <Route path="/admin/img" element={<AdministrationImagem />} />
            <Route path="/reserves" element={<BookingUser />} />
            <Route path="/registered-product" element={<CarPost />} />
          </Routes>

          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default RouteList;