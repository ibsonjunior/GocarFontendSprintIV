import Imagecar from "../components/ImageS3/UploadImageToS3WithReactS3";

const AdministrationImg = () => {
  return (
    <>
        <div className="imagess3">
            <h3>Carregar Imagens</h3>
            <div className="image_input_container">
              <Imagecar />
            </div>
        </div>
    </>
  );
}

 export default AdministrationImg;