import { useState } from "react";

import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // email: "",
  })
  const formDataHandler = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "Vorname ist erforderlich";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Nachname ist erforderlich";
    }
    localStorage.setItem("Vorname", formData.firstName );
    localStorage.setItem("Name", formData.lastName );
console.log (localStorage.getItem ("Vorname"), "Name");
console.log (localStorage.getItem ("Name"), "Name");
    alert("Formular wurde erfoglreich gesendet!")
  }
  return (
    <div className='formContainer'>
      <form
        className="inputs-container"
        onSubmit={handleSubmit}
        method='post'
      >
        <div className="input-section">
          <div className="input-container">
            <label htmlFor="id-name">Vorname:</label>
            <input 
              id="id-name"
                type="text"
                className="form-control"
                placeholder="Willhelm"
                aria-label="First name"
                name='firstName'
                onChange={formDataHandler}
                value={formData.firstName}
                autoFocus={true}
              >
              </input>
        </div>
        <div className="input-section">
          <label htmlFor="id-vorName">Nachname:</label>
            <input
              id="id-vorName"
              type="text"
              className="form-control"
              placeholder="Willkürlich"
              aria-label="Last name"
              name='lastName'
              onChange={formDataHandler}
              value={formData.lastName}
              >
              </input>
        </div>
        </div>
{/*   <div className="input-section">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input
      type="email"
      className="form-control"
      id="inputEmail4">
      </input>
  </div>
  <div className="input-section">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      id="inputPassword4">
      </input>
  </div>
  <div className="input-section">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="1234 Main St">
      </input>
  </div>
  <div className="input-section">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor">
      </input>
  </div>
  <div className="input-section">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input
      type="text"
      className="form-control"
      id="inputCity">
      </input>
  </div>
  <div className="input-section">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="input-section">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input
      type="text"
      className="form-control"
      id="inputZip">
      </input>
  </div>
  <div className="input-section">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div >
    <button className="submit-button" type="submit" className="">send</button>
  </div>
</form>
<button className="btn" type="" onClick={() => localStorage.clear()} className="">clear</button>
    </div>
  )
}
export default Contact