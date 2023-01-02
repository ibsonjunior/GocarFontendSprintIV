import React, { useContext } from "react";

import { Context } from "../../../Context/Context";

import "./style.css";

function HomeCategories() {
  const { categories } = useContext(Context);

  return (
    <div className="categories">
      <h3 className="categories_title">C A T E G O R I A S</h3>
      <div className="categories_cards">
        {categories?.map((categories) => (
          <div key={categories.id} className="card_category">
            <div className="category_img">
              {" "}
              <img className="imgh" src={categories.urlImage} alt="" />
            </div>
            <div className="category_info">
              <h2>{categories.qualification}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;