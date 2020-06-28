import React from "react";
import "./../styles/FormNewRestaurant.css";

const FormNewRestaurant = (props) => {
  const AddedRestAlert = (
    <div className="alert-container">
      <h2>
        {props.allOK
          ? `Wysłano nową restaurację.`
          : `Wpisz poprawnie wszystkie dane.`}
      </h2>
      <button className="btn-alert" onClick={props.handleAlertBtn}>
        Zamknij
      </button>
    </div>
  );
  return (
    <>
      <form className="submit-restaurant" onSubmit={props.handleSubmit}>
        <label htmlFor="name">Nazwa restauracji:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="city">Miasto:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={props.city}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="district">Dzielnica:</label>
        <input
          type="text"
          id="district"
          name="district"
          value={props.district}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="street">Ulica:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={props.street}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="number">Nr. ulicy:</label>
        <input
          type="text"
          id="number"
          name="number"
          value={props.number}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="lat">Sz. geo. (latitude):</label>
        <input
          type="number"
          id="lat"
          name="lat"
          value={props.lat}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="lng">Dł. geo. (longitude):</label>
        <input
          type="number"
          id="lng"
          name="lng"
          value={props.lng}
          onChange={props.handleChange}
        />
        <br />
        <button type="submit">Dodaj Restaurację</button>
      </form>
      {props.isSend ? AddedRestAlert : null}
    </>
  );
};

export default FormNewRestaurant;
