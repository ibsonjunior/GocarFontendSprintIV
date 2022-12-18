import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  Navbar,
  Container,
  Offcanvas,
  ButtonGroup,
  Button,
} from "react-bootstrap";

function MainHeader() {
  const location = useLocation();

  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" style={{ backgroundColor: '#01010A' }} >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="https://pi-group01-gocar-bucket.s3.amazonaws.com/assets/gocar_log.png"
                  width="150"
                  height="45"
                  className="align-top ml-4"
                  alt="LOGO"
                  
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle

              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ backgroundColor: 'white' }}
              variant="outline-disabled"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "70vw" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <img
                       src="https://pi-group01-gocar-bucket.s3.amazonaws.com/assets/gocar_log.png"
                      width="100"
                      height="30"
                      className="align-top ml-4"
                      alt="LOGO"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ButtonGroup className="md-4 justify-content-end flex-grow-1 pe-3">
                  <Link to="/signin">
                    {path !== "/signin" ? (
                      <Button
                        className="me-3 rounded btn_side"
                        variant="outline-success"
                      >
                        {" "}
                        Login{" "}
                      </Button>
                    ) : (
                      ""
                    )}
                  </Link>

                  <Link to="/signup">
                    {path !== "/signup" ? (
                      <Button
                        className="me-3 rounded btn_side"
                        variant="outline-primary"
                      >
                        {" "}
                        Cadastre-se{" "}
                      </Button>
                    ) : (
                      ""
                    )}
                  </Link>
                </ButtonGroup>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MainHeader;