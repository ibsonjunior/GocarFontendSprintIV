import React, { useState } from "react";

import HomeSearchBlock from "../components/Home/Home_SearchBlock";
import HomeCategories from "../components/Home/Home_Categories";
import HomeCards from "../components/Home/Home_Cards";
import HomeClients from "../components/Home/Home_Clients";
import Imagecar from "../components/ImageS3/UploadImageToS3WithReactS3";

// import Imagecar2 from "../components/ImageS3/UploadImageToS3WithNativeSdk";

import "../styles/Home.css";

function Home() {
  const [search, setSearch] = useState({
    city: "",
    checkin: "",
    checkout: "",
  });

  return (
    <>
      <main>
        <div className="body">
          <HomeSearchBlock search={search} setSearch={setSearch}/>

          <section>
            <HomeCategories />
          </section>

          <section className="recomendacoes">
            <h2 className="recomendations_title">R E C O M E N D A Ç Õ E S</h2>
            <div className="recomendations">
              <HomeCards search={search} />
            </div>

            <Imagecar/> 
          </section>

          <section className="clients">
            
              <div className="clientetitulo">N O S S O S&nbsp;&nbsp;&nbsp;&nbsp;C L I E N T E S</div>
            
              <HomeClients/>  

              {/* <Imagecar/>    */}
                    
          </section>

        </div>
      </main>
    </>
  );
}

export default Home;