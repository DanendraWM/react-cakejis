import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Rating } from "@mui/material";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const DetailMenuPage = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pict, setPict] = useState("");
  const [type, setType] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const [desc, setDesc] = useState("");

  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = async () => {
    const response = await axios.get(
      `http://onesweetbite.herokuapp.com/api/get-cake/?id=${id}`
    );
    // console.log(response.data.data);
    const data = response.data.data;
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
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row w-5/6">
            <div className="flex-row">
              <Link to={"/"} className="btn btn-info lg:mb-3">
                Back
              </Link>
              <img src={pict} className="max-w-sm rounded-lg shadow-2xl" />
              <p className="py-2 text-center">{type}</p>
            </div>
            <div>
              <Rating name="read-only" value={parseInt(rate)} readOnly />
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{desc}</p>
              <p className="py-2">dengan berbahan : {ingredient}</p>
              <p className="py-1 text-2xl font-bold">{price}</p>
              <button className="btn btn-primary my-3 w-4/5">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMenuPage;
