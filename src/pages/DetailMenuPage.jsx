import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Rating } from "@mui/material";
import { useNavigate, useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
const DetailMenuPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pict, setPict] = useState("");
  const [type, setType] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) fetchData();
    getDetail();
  }, []);
  const getDetail = async () => {
    const response = await axios.get(
      `http://onesweetbite.herokuapp.com/api/get-cake/?id=${id}`
    );
    // console.log(response.data.data);
    const data = response.data.data;
    setData(data);
    setName(data.name);
    setPict(data.picturePath);
    setType(data.types);
    setIngredient(data.ingredients);
    setPrice(
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(data.price)
    );
    setRate(data.rate);
    setDesc(data.description);
  };
  const fetchData = async () => {
    const response = await axios.get(
      "https://onesweetbite.herokuapp.com/api/user",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setUser(response.data.data);
  };

  const pesan = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("cake_id", id);
    bodyFormData.append("user_id", user.id);
    bodyFormData.append("quantity", 1);
    bodyFormData.append("total", data.price);
    bodyFormData.append("status", "PENDING");
    await axios({
      method: "post",
      url: "https://onesweetbite.herokuapp.com/api/checkout",
      data: bodyFormData,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => {
        console.log("berhasil");
        navigate("/");
        // console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row w-5/6">
            <div className="flex-row">
              <Link to={"/"} className="btn btn-info lg:mb-3 my-3">
                Back
              </Link>
              <img
                src={pict}
                className="max-w-sm rounded-lg lg:shadow-2xl lg:h-96 lg:w-96 w-full h-full "
              />
              <p className="py-2 text-center">{type}</p>
            </div>
            <div>
              <Rating name="read-only" value={parseInt(rate)} readOnly />
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{desc}</p>
              <p className="py-2">dengan berbahan : {ingredient}</p>
              <p className="py-1 text-2xl font-bold">{price}</p>
              <label
                htmlFor="my-modal-6"
                className="btn btn-primary my-3 w-4/5"
              >
                pesan sekarang
              </label>

              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Apakah yakin ingin memesan cake ini
                  </h3>
                  <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">
                      Tidak
                    </label>
                    <button className="btn btn-success" onClick={() => pesan()}>
                      Iya Dong
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailMenuPage;
