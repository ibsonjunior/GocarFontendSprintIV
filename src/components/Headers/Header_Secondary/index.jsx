import React, { useContext, useEffect, useState } from "react";

import "./style.css";

import { Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import { SignOut } from "phosphor-react";

import {Button} from "react-bootstrap";

function SecondaryHeader() {
  const [autenticacao, setAutenticacao] = useState("");

  useEffect(() => {
  }, [autenticacao]);

  function logout() {
    localStorage.clear();
    setAutenticacao("logout");
  }

// F7F6F5
//#01010A

  const name = localStorage.getItem('name');
  const lastname = localStorage.getItem('lastname');
  const roles = localStorage.getItem('roles');

  return (
    <>
      <Navbar className="navbar" style={{ backgroundColor: '#01010A' }}>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://pi-group01-gocar-bucket.s3.amazonaws.com/assets/gocar_log.png"
              width="160"
              height="48"
              className="align-top ml-4"
              alt="LOGO"
            />
          </Link>
        </Navbar.Brand>

        <div className="user_autenticado">
          <div className="user_options">
            <div className="welcome_text">
              {/* <h5>Olá, {name} {lastname} </h5> */}
            </div>

           <Link to="/admin">
                    {roles == "ROLE_ADMIN" ? (
                      <Button
                        className="me-3 rounded btn_side"
                        variant="outline-success"
                      >
                        {" "}
                        Admin{" "}
                      </Button>
                    ) : (
                      ""
                    )}
            </Link> 

            <button
              className="logout"
              onClick={() => {
                logout();
              }}
            >
              {" "}
              <a href="/">
                <SignOut size={40} color="#F7F6F5" />
              </a>{" "}
            </button>

            <Link to="/reservas">
            <button className="circle1" href> 
                <div className="circle2">
                    <div className="perfil" >
                      <div className="letters"><h5>{name[0]}&nbsp;{lastname[0]}</h5></div>
                    </div>
                </div> 
            </button>
            </Link>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default SecondaryHeader;