import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
const HomePage = (props) => {
  // const navigate = useNavigate();
  // const [status, setStatus] = useState("");
  // navigate("/");
  // console.log(props.user.meta.code);
  // status === 401 && navigate("/login");
  // const [datas, setDatas] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://onesweetbite.herokuapp.com/api/user",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     // console.log(response.data.data);
  //     setDatas(response.data);
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
    </>
  );
};

export default HomePage;
