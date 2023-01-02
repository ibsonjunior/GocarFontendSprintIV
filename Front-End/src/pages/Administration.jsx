import React, { useState } from "react";
import "../styles/Administration.css";
import { useFormik } from "formik";

const categoriesAdm = {
  Esportivos: 1,
  Elétricos: 2,
  Luxo: 3,
  SUV: 4,
};

const citiesAdm = {
  Sorocaba: 1,
  Campinas: 2,
  "São Paulo": 3,
  Recife: 4,
  Salvador: 5,
};

const featuresAdm = {
  "Ar-Condicionado": 1,
  Blindagem: 2,
  "4 Portas": 3,
  "Direção Hidráulica": 4,
  Airbag: 5,
  ABS: 6,
  "Mala Grande": 7,
  "Vidro Elétrico": 8,
  "Trava Elétrica": 9,
  "Câmbio Automático": 10,
};

function Administration() {
  const [checkbox, setCheckbox] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckbox([...checkbox, e.target.value]);
    } else {
      const index = checkbox.indexOf(e.target.value);
      const array = [...checkbox];
      array.splice(index, 1);
      setCheckbox(array);
    }
  };



  const validate = (values) => {
    const errors = {};

    if (!values.nome) {
      errors.nome = "Obrigatório";
    }

    if (!values.category) {
      errors.category = "Obrigatório";
    }

    if (!values.address) {
      errors.address = "Obrigatório";
    }

    if (!values.city) {
      errors.city = "Obrigatório";
    }

    if (!values.description) {
      errors.description = "Obrigatório";
    }

    if (!values.features) {
      errors.features = "Obrigatório";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      category: "",
      address: "",
      city: "",
      description: "",
      features: [],
      images: [],
    },
    validate,
    onSubmit: (values) => {
      const featuresArray = checkbox.map((feature) => {
        return {
          id: featuresAdm[feature],
        };
      });

      console.log(featuresArray);

      const body = {
        name: `${values.nome}`,
        description: `${values.description}`,
        features: featuresArray,
        images: [],
        category: {
          id: categoriesAdm[values.category],
        },
        city: {
          id: citiesAdm[values.city],
        },
        booking: [],
      };

      fetch(`https://gocarback.ctdprojetos.com.br/products`, {
        method: "POST",
        headers: {
          Accept: "*/* , application/json, text/plain ",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          } else {
            res.json().then((data) => {
              localStorage.setItem("idNewCar", data.id);
              localStorage.setItem("nameNewCar", values.nome);
              setTimeout(() => {
                window.location.href = "/admin/img";
              }, 0);
            });
          }
        })
        .catch(() => alert("Erro ao cadastrar o carro"));
    },
  });

  return (
    <>
      <div className="body">
        <h1>Admin</h1>

        <form
          encType="multipart/form-data"
          className="form"
          onSubmit={formik.handleSubmit}
        >
          <h3>Criar Produto</h3>

          <div className="primary_infos">
            <div className="input_container">
              <label htmlFor="nome">Nome do Produto</label>
              {formik.touched.nome && formik.errors.nome ? (
                <>
                  <input
                    className="input_error"
                    name="nome"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nome}
                  />

                  <div className="error_message">{formik.errors.nome}</div>
                </>
              ) : (
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nome}
                />
              )}
            </div>

            <div className="input_container">
              <label htmlFor="category">Categoria</label>

              {formik.touched.category && formik.errors.category ? (
                <>
                  <input
                    className="input_error"
                    name="category"
                    type="select"
                    list="categories"
                    placeholder="Categoria"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                  />

                  <div className="error_message">{formik.errors.category}</div>
                </>
              ) : (
                <input
                  id="category"
                  name="category"
                  type="select"
                  list="categories"
                  placeholder="Categoria"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                />
              )}
            </div>

            <div className="input_container">
              <label htmlFor="address">Endereço</label>
              {formik.touched.address && formik.errors.address ? (
                <>
                  <input
                    className="input_error"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />

                  <div className="error_message">{formik.errors.address}</div>
                </>
              ) : (
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
              )}
            </div>

            <div className="input_container">
              <label htmlFor="city">Cidade</label>

              {formik.touched.city && formik.errors.city ? (
                <>
                  <input
                    className="input_error"
                    name="city"
                    type="select"
                    list="cities"
                    placeholder="Cidade"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />

                  <div className="error_message">{formik.errors.city}</div>
                </>
              ) : (
                <input
                  name="city"
                  type="select"
                  list="cities"
                  placeholder="Cidade"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
              )}
            </div>
          </div>

          <div className="description_text_area">
            <label htmlFor="description">

              <h4>Descrição</h4>
            </label>
            {formik.touched.description && formik.errors.description ? (
              <>
                <textarea
                  className="text_error"
                  name="description"
                  id="description"
                  cols="150"
                  rows="8"
                  placeholder="Escreva aqui"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                ></textarea>

                <div className="error_message">{formik.errors.description}</div>
              </>
            ) : (
              <textarea
                className="text_area"
                name="description"
                id="description"
                cols="150"
                rows="8"
                placeholder="Escreva aqui"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              ></textarea>
            )}
          </div>

          <div className="product_atributes_container">
            <h3>Adicionar Atributos</h3>
            <div className="atributes_container">
              <div className="input_atribute_container">
                <label htmlFor="features">Ar-Condicionado</label>
                <input
                  id="features1"
                  name="features"
                  type="checkbox"
                  value={"Ar-Condicionado"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Blindagem</label>
                <input
                  id="features2"
                  name="features"
                  type="checkbox"
                  value={"Blindagem"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">4 Portas</label>
                <input
                  id="features3"
                  name="features"
                  type="checkbox"
                  value={"4 Portas"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Direção Hidráulica</label>
                <input
                  id="features4"
                  name="features"
                  type="checkbox"
                  value={"Direção Hidráulica"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Airbag</label>
                <input
                  id="features5"
                  name="features"
                  type="checkbox"
                  value={"Airbag"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">ABS</label>
                <input
                  id="features6"
                  name="features"
                  type="checkbox"
                  value={"ABS"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Mala Grande</label>
                <input
                  id="features7"
                  name="features"
                  type="checkbox"
                  value={"Mala Grande"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Vidro Elétrico</label>
                <input
                  id="features8"
                  name="features"
                  type="checkbox"
                  value={"Vidro Elétrico"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Trava Elétrica</label>
                <input
                  id="features9"
                  name="features"
                  type="checkbox"
                  value={"Trava Elétrica"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input_atribute_container">
                <label htmlFor="features">Câmbio Automático</label>
                <input
                  id="features10"
                  name="features"
                  type="checkbox"
                  value={"Câmbio Automático"}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              {formik.touched.features && formik.errors.features
                ? console.log("não adicionou feature")
                : null}
            </div>
          </div>

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

          <datalist id="categories">
            <option value="Esportivos" id="1">
              Esportivos
            </option>
            <option value="Elétricos" id="2">
              Elétricos
            </option>
            <option value="Luxo" id="3">
              Luxo
            </option>
            <option value="SUV" id="4">
              SUV
            </option>
          </datalist>

          <button className="btn_send" type="submit">
            Próximo
          </button>
        </form>
      </div>
    </>
  );
}

export default Administration;
