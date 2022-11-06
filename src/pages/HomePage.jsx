import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const HomePage = () => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://onesweetbite.herokuapp.com/api/user",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(response);
        setStatus(response.status);
      } catch (error) {
        // console.log(error.response);
        setStatus(error.response.status);
      }
    };

    fetchData();
  }, []);
  status === 401 && navigate("/login");
  return (
    <>
      <Navbar />
      <Menu />
    </>
  );
};

export default HomePage;
