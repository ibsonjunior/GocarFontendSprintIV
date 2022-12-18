import React, { useContext, useState } from "react";

import { Context } from "../../../Context/Context";

import Calendar from "../../Calendar";

import { format } from "date-fns";

import { Container } from "react-bootstrap";

import { ArrowCircleUp } from "phosphor-react";

function HomeSearchBlock({ search, setSearch }) {
  const { calendar } = useContext(Context);

  const [expand, setExpand] = useState(false);
  function showCalendar() {
    setExpand(!expand);
  }

  let initialDay = calendar.map((initialDay) => {
    return format(initialDay.startDate, "yyyy-MM-dd");
  });
  let finalDay = calendar.map((finalDay) => {
    return format(finalDay.endDate, "yyyy-MM-dd");
  });

  let showInitialDay = calendar.map((initialDay) => {
    return format(initialDay.startDate, "dd/MM/yyyy");
  });
  let showFinalDAy = calendar.map((finalDay) => {
    return format(finalDay.endDate, "dd/MM/yyyy");
  });

  initialDay = initialDay[0];
  finalDay = finalDay[0];

  showInitialDay = showInitialDay[0];
  showFinalDAy = showFinalDAy[0];

  return (
    <div className="second_header">
      <div className="titulofilter">
        F A Ç A &nbsp;&nbsp; A &nbsp;&nbsp; S U A &nbsp;&nbsp; R E S E R V A{" "}
      </div>

      {/* ______INPUT DE CIDADES______ */}
      <div className="options">
        <div className="input_flex">
          <label htmlFor="city_name">C I D A D E</label>
          <input
            type="text"
            list="cities"
            className="city_name"
            placeholder="Cidade"
            onChange={(e) =>
              setSearch({
                ...search,
                city: e.target.value,
              })
            }
          />
          <datalist id="cities">
            <option value="Sorocaba" id="1">
              Sorocaba
            </option>
            <option value="Campinas" id="2">
              Campinas
            </option>
            <option value="São Paulo" id="3">
              São Paulo
            </option>
            <option value="Recife" id="4">
              Recife
            </option>
            <option value="Salvador" id="5">
              Salvador
            </option>
          </datalist>
        </div>

        <div className="input_flex">
          <div className="selecione"> C H E C K - I N / C H E C K - O U T</div>
          <button className="date" onClick={showCalendar}>
            {" "}
            {showInitialDay} - {showFinalDAy}{" "}
          </button>
        </div>

        <div className="input_flex">
          <br />
          <button
            className="btn_header"
            onClick={() =>
              setSearch({
                ...search,
                checkin: initialDay,
                checkout: finalDay,
              })
            }
          >
            <a href="#galeria_carro">Buscar</a>
          </button>
        </div>
      </div>

      <Container fluid className={`box ${expand ? "" : "hiden"}`}>
        <div className="seta" onClick={showCalendar}>
          <ArrowCircleUp size={45} />
        </div>
        <Calendar />
      </Container>
    </div>
  );
}

export default HomeSearchBlock;