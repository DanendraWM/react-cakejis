import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pesan, setPesan] = useState(false);
  const navigate = useNavigate();
  const register = async (value) => {
    value.preventDefault();
    try {
      await axios.post("https://onesweetbite.herokuapp.com/api/register", {
        email: email,
        password: password,
        name: name,
      });
      setPesan(true);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" min-h-screen bg-slate-50 ">
        <Navbar />
        <div className="card w-1/2 bg-base-100 shadow-xl mx-auto m-3 my-4 bg-transparent">
          {pesan && (
            <div className="alert alert-success shadow-lg my-10 w-1/2 mx-auto text-white">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Berhasil daftar</span>
              </div>
            </div>
          )}

          <p className="text-black text-5xl text-center font-mono">Mendaftar</p>
          <div className="card-body">
            <form onSubmit={register}>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input w-full m-2 bg-transparent text-slate-900 border-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input w-full m-2 bg-transparent text-slate-900 border-black invalid:border-pink-600"
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
              <button className="btn btn-primary m-2 mx-auto">Register</button>
            </form>
            <div className="divider">OR</div>
            <Link to="/Login" className="btn btn-success text-white">
              punya akun
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
