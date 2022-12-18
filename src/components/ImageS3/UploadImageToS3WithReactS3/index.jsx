import React, { useState } from "react";

import { Buffer } from "buffer";

import { uploadFile } from "react-s3";

// Buffer.from("anything", "base64");
//window.Buffer = window.Buffer || require("buffer").Buffer;

//(window as any).global = window;
// @ts-ignore
//window.Buffer = window.Buffer || require('buffer').Buffer;
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

const UploadImageToS3WithReactS3 = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config).then((data) => console.log(data));
  };

  return (
    <div>
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
  );
};

export default UploadImageToS3WithReactS3;