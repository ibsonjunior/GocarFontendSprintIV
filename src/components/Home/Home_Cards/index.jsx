import React, { useContext, useState, useEffect } from "react";

import { Context } from "../../../Context/Context";

import { Link } from "react-router-dom";

function HomeCards({ search }) {

  const { products, productImages } = useContext(Context);
  const [filterProductsAndDates, setFilterProductsAndDates] = useState([]);

  const ids = [43, 37, 31, 13, 25, 19, 7, 1];

  const images = productImages?.filter((url) => ids.includes(url.id));

  let product = products.map((cars) => {
    const names = cars.name.split(" ");
    const fotos = images.find((fotos) => fotos.title.includes(names[0]));
    return { ...cars, urlImage: fotos?.urlImage };
  });

  let recomended = product.slice(4, 6);

  const urlFilterProductsAndDates = `https://gocarback.ctdprojetos.com.br/products/dates/?dateStart=${search.checkin}&dateEnd=${search.checkout}`;
  useEffect(() => {
    fetch(urlFilterProductsAndDates)
      .then((responseProducts) => responseProducts.json())
      .then((productsJSON) => setFilterProductsAndDates(productsJSON));
  }, [search]);

  return (
    <>
      <div id="galeria_carro" className="galeria_carro">
        {search.checkin === "" && search.checkout === ""
          ? recomended?.map((car) => (
              <div key={images.id} className="card_main">
                <div className="card_image">
                  <img src={car?.urlImage} alt="" />
                </div>
                <div className="card_description">
                  <div className="card_title">
                    <h3>{car?.name}</h3>

                    <h4>{car.category.qualification}</h4>

                    <p>{car.description}</p>

                    <div className="car_button">
                      <Link to={"/product/" + car.id} className="link_button">
                        <button className="button_car">Ver mais</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : Array.isArray(filterProductsAndDates) &&
            filterProductsAndDates?.map((car) => (
              <div key={images.id} className="card_main">
                <div className="card_image">
                  {" "}
                  {car?.images?.map((urlImage) => (
                    <img
                      src={
                        urlImage.title.includes("Frontal")
                          ? urlImage.urlImage.slice(0)
                          : ""
                      }
                      alt=""
                    />
                  ))}
                  {" "}
                </div>
                <div className="card_description">
                  <div className="card_title">
                    {" "}
                    <h3>{car?.name}</h3>{" "}
                  </div>

                  <div className="car_description">
                    <h6>{car.category.qualification}</h6>
                    <p>{car.description}</p>

                    <div className="car_button">
                      <Link to={"/product/" + car.id} className="link_button">
                        <button className="button_car">Ver mais</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default HomeCards;