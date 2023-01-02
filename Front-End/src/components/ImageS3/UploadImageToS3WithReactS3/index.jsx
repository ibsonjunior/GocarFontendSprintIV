import React, { useState } from "react";

import { Buffer } from "buffer";

import { uploadFile } from "react-s3";

import { Link } from "react-router-dom";

import "../UploadImageToS3WithReactS3/style.css";

window.Buffer = Buffer;

const S3_BUCKET = "pi-group01-gocar-bucket";
const REGION = "us-east-1";
const ACCESS_KEY = "AKIAV4YTWNKPK4DMOZA3";
const SECRET_ACCESS_KEY = "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";

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

function   UploadImageToS3WithReactS3 ()  {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then((data) => localStorage.setItem("ImagemAdm1", data.location))
      .then(images());
  };

  const handleUpload1 = async (file) => {
    uploadFile(file, config)
      .then((data) => localStorage.setItem("ImagemAdm1", data.location))
      .then(images1());
  };

  const handleUpload2 = async (file) => {
    uploadFile(file, config)
      .then((data) => localStorage.setItem("ImagemAdm2", data.location))
      .then(images2());
  };

  const handleUpload3 = async (file) => {
    uploadFile(file, config)
      .then((data) => localStorage.setItem("ImagemAdm3", data.location))
      .then(images3());
  };

  const handleUpload4 = async (file) => {
    uploadFile(file, config)
      .then((data) => localStorage.setItem("ImagemAdm4", data.location))
      .then(images4());
  };

  const handleUpload5 = async (file) => {
    uploadFile(file, config)
      .then((data) => localStorage.setItem("ImagemAdm5", data.location))
      .then(images5());
  };

  let nameNewCar = localStorage.getItem("nameNewCar");

  let imageAdmin = localStorage.getItem("ImagemAdm");
  let imageAdmin1 = localStorage.getItem("ImagemAdm1");
  let imageAdmin2 = localStorage.getItem("ImagemAdm2");
  let imageAdmin3 = localStorage.getItem("ImagemAdm3");
  let imageAdmin4 = localStorage.getItem("ImagemAdm4");
  let imageAdmin5 = localStorage.getItem("ImagemAdm5");

  let idNewCar = localStorage.getItem("idNewCar");

  function images() {
    fetch(`https://gocarback.ctdprojetos.com.br/images`, {
      method: "POST",
      headers: {
        Accept: "*/* , application/json, text/plain ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${nameNewCar} - Frontal`,
        urlImage: `${imageAdmin}`,
        product: {
          id: `${idNewCar}`,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
    });
  }

  function images1() {
    fetch(`https://gocarback.ctdprojetos.com.br/images`, {
      method: "POST",
      headers: {
        Accept: "*/* , application/json, text/plain ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${nameNewCar}`,
        urlImage: `${imageAdmin1}`,
        product: {
          id: `${idNewCar}`,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
    });
  }

  function images2() {
    fetch(`https://gocarback.ctdprojetos.com.br/images`, {
      method: "POST",
      headers: {
        Accept: "*/* , application/json, text/plain ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${nameNewCar}`,
        urlImage: `${imageAdmin2}`,
        product: {
          id: `${idNewCar}`,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
    });
  }

  function images3() {
    fetch(`https://gocarback.ctdprojetos.com.br/images`, {
      method: "POST",
      headers: {
        Accept: "*/* , application/json, text/plain ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${nameNewCar}`,
        urlImage: `${imageAdmin3}`,
        product: {
          id: `${idNewCar}`,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
    });
  }

  function images4() {
    fetch(`https://gocarback.ctdprojetos.com.br/images`, {
      method: "POST",
      headers: {
        Accept: "*/* , application/json, text/plain ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${nameNewCar}`,
        urlImage: `${imageAdmin4}`,
        product: {
          id: `${idNewCar}`,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
    });
  }

  function images5() {
    fetch(`https://gocarback.ctdprojetos.com.br/images`, {
      method: "POST",
      headers: {
        Accept: "*/* , application/json, text/plain ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${nameNewCar}`,
        urlImage: `${imageAdmin5}`,
        product: {
          id: `${idNewCar}`,
        },
      }),
    }).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
    });
  }

  return (
    <>
      <div className="containerimg">
        <div className="s3container">
          <h5>Capa</h5>
          <div className="s3img">
            <input type="file" onChange={handleFileInput} />
            <button
              clasName="btnImg"
              onClick={() => handleUpload(selectedFile)}
            >
              Enviar
            </button>
          </div>

          <h5>Externo</h5>
          <div className="s3img">
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => handleUpload1(selectedFile)}>Enviar</button>
          </div>

          <div className="s3img">
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => handleUpload2(selectedFile)}>Enviar</button>
          </div>

          <h5>Interno</h5>
          <div className="s3img">
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => handleUpload3(selectedFile)}>Enviar</button>
          </div>

          <div className="s3img">
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => handleUpload4(selectedFile)}>Enviar</button>
          </div>

          <div className="s3img">
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => handleUpload5(selectedFile)}>Enviar</button>
          </div>
        </div>

        <div className="btnupload">
          <Link to="/registered-product">
            <div className="btnimgs3">
              <button>Enviar</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UploadImageToS3WithReactS3;
