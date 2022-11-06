import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = async (value) => {
    value.preventDefault();
    try {
      const response = await axios.post(
        "https://onesweetbite.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.data.access_token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" min-h-screen bg-slate-50 ">
        <Navbar />
        <div className="card w-1/2 bg-base-100 shadow-xl mx-auto m-3 my-4 bg-transparent">
          <p className="text-black text-5xl text-center font-mono">Masuk</p>
          <div className="card-body">
            <form onSubmit={auth}>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input w-full m-2 bg-transparent text-slate-900 border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                className="input w-full m-2 bg-transparent text-slate-900 border-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-primary m-2 mx-auto text-white">
                Login
              </button>
            </form>
            <div className="divider text-black ">OR</div>
            <Link to="/register" className="btn btn-success text-white">
              Mendaftar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
