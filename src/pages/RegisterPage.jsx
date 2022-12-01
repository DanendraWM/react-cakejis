import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { MdOutlinePeopleAlt } from "react-icons/md";
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
      <Navbar />
      <div className="card sm:w-1/2  bg-base-100 shadow-xl mx-auto m-3 my-14 bg-transparent">
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

        <div className="card-body">
          <p className="text-black mx-auto text-5xl">
            <MdOutlinePeopleAlt />
          </p>
          <form onSubmit={register}>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="form-control block w-full px-4 py-2 my-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control block w-full px-4 py-2 my-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-pink-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control block w-full px-4 py-2 my-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-full m-2 mx-auto text-white btn-sm">
              Mendaftar
            </button>
          </form>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-400  after:flex-1 after:border-t after:border-gray-400">
            <p className="text-center font-bold text-gray-500">OR</p>
          </div>
          <Link to="/login" className="btn btn-success text-white btn-sm">
            Login
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
