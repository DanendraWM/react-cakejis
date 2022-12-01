import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { FiLogIn } from "react-icons/fi";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) navigate("/");
  }, []);
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
      <Navbar />
      <div className="card sm:w-1/2 bg-base-100 min-h-full shadow-xl mx-auto my-14 bg-transparent">
        <div className="card-body ">
          <p className="text-black text-5xl mx-auto">
            <FiLogIn />
          </p>
          <form onSubmit={auth}>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control block w-full px-4 py-2 my-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
              Login
            </button>
          </form>
          <div className="flex items-center before:flex-1 before:border-t before:border-gray-400  after:flex-1 after:border-t after:border-gray-400">
            <p className="text-center font-bold text-gray-500">OR</p>
          </div>
          <Link to="/register" className="btn btn-success text-white btn-sm">
            Mendaftar
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
