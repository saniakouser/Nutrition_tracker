import React, { useState } from 'react';
import './Login.css';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = ({Setlog}) => {
  var opt = "Login";
  const [LoginInfo, SetLoginInfo] = useState({
    email: "",
    password: ""
  });
  const [title, Settitle] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    SetLoginInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  async function SendInfo(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginInfo)
    });
    if (res.status === 201) {
      const data = await res.json();
      navigate('/');
      Settitle("Logged In Successfully!!");
      Setlog("Logout")
    } else {
      Settitle("Invalid User!!");
    }
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <h4 style={{ textAlign: "center" }}>{title}</h4>
      <form onSubmit={SendInfo}>
        <label>
          Email:
          <input
            type="email"
            name='email'
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name='password'
            onChange={handleChange}
            required
          />
        </label>
        <Link to="/forget_password">Forget Password?</Link>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
        <button type="submit">{opt}</button>
      </form>
    </div>
  );
};

export default Login;
