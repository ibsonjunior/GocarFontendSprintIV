import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productBookings, setProductBookings] = useState([]);
  //BookingUser
  const [bookingsUser, setBookingsUser] = useState([]);
  const [calendar, setCalendar] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      color: "#f48240",
      key: "selection",
    },
  ]);

  const [rent, setRent] = useState();

  // Categories
  const urlCategories = "http://100.24.39.208:8081/categories";
  useEffect(() => {
    fetch(urlCategories)
      .then((responseCategories) => responseCategories.json())
      .then((categoriesJSON) => setCategories(categoriesJSON));
  }, []);

  // Cities
  const urlCities = "http://100.24.39.208:8081/cities";
  useEffect(() => {
    fetch(urlCities)
      .then((responseCities) => responseCities.json())
      .then((citiesJSON) => setCities(citiesJSON));
  }, []);

  // Products
  const urlProducts = "http://100.24.39.208:8081/products";
  useEffect(() => {
    fetch(urlProducts)
      .then((responseProducts) => responseProducts.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  // Images
  const urlImages = "http://100.24.39.208:8081/images";
  useEffect(() => {
    fetch(urlImages)
      .then((responseImages) => responseImages.json())
      .then((imagesJSON) => setProductImages(imagesJSON));
  }, []);

  // Bookings
  const urlBookings = "http://100.24.39.208:8081/bookings";
  useEffect(() => {
      fetch(urlBookings)
        .then((responseCars) => responseCars.json())
        .then((reservas) => {
            let a = reservas.filter((b) => b.id > 3 )
            return setProductBookings(a);
        } );      
  }, []);

 
  useEffect(() => {
      fetch(urlBookings)
        .then((responseCars) => responseCars.json())
        .then((bookinsJSON) => setBookingsUser(bookinsJSON));
      }, []);

      console.log("Bookings Context", bookingsUser);

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        cities,
        setCities,
        products,
        setProducts,
        productImages,
        setProductImages,
        productBookings,
        setProductBookings,
        bookingsUser,
        setBookingsUser,
        calendar,
        setCalendar,
        rent,
        setRent
    
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;