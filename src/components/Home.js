import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let isFilled = false;
function Home() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    isFilled = true;
    event.preventDefault();
    fetch(`http://127.0.0.1:5000/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setFormData({
          username: "",
          password: ""
        });
        if (isFilled === true) {
          navigate('/About');
        }
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  return (
    <div>
      <h1>Welcome to RescueMePets</h1>
      <form id="login-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Home;
