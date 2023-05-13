    
import { useState } from "react";
import validation from "../validation";
import style from "./Forms.module.css";
import logo from "../asets/BG_FORMS_RM_5.png";

const Forms = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setErrors(validation({...userData,[event.target.name]: event.target.value }))
    setUserData({ ...userData,[event.target.name]: event.target.value,})
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData);
    setSubmitted(true);
  };

  return (
    <div className={style.Forms}>
      <img src={logo} alt="Logo" className={style.logo} />

      <form>
        <label htmlFor="email">Email: </label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2}</p>) 
        : (<p>{errors.e3}</p>)
        }
        <hr />

        <label htmlFor="password">Password: </label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {
            errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
        }
        <br />
        <button onClick={handleSubmit} type="submit">SUBMIT</button>

      </form>

      {submitted && (
        <div className={style.successMessage}>
          <p>¡Formulario enviado con éxito!</p>
        </div>
      )}
    </div>
  );
};

export default Forms;