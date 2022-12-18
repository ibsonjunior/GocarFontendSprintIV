import React from "react";

import "../Product_Features/style.css";

function ProductFeatures({ product }) {

  const setFeature = new Set();

  const feature = product?.features?.map((feature) => { return feature});
  console.log(feature);

  const filterFeature = feature.filter((feature) => {
    const duplicatedFeature = setFeature.has(feature.id);
    setFeature.add(feature.id);
    return !duplicatedFeature;
  });
  console.log("a",filterFeature);
    




  return (
    <>
      <div className="descricao">
        <h1>{product?.name} </h1>
        <hr className="solid"></hr>
        <div className="descriptionCar">
          <p>{product?.description}</p>
        </div>
      </div>

      <div className="caracteristicas">
        <h1>O que esse carro oferece ?</h1>
        <hr className="solid"></hr>
        <div className="container">
          {filterFeature?.map((feature) => {
            return (
              console.log("akk",feature),
              <div key={feature?.id} className="item">
                <img className="iconCar" src={feature?.icon} alt="icon" />
                <h4>{feature?.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductFeatures;