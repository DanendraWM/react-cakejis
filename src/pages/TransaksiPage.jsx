import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const TransaksiPage = () => {
  useEffect(() => {
    getTransaksi();
  }, []);
  const [datas, setDatas] = useState([]);
  const getTransaksi = async () => {
    const response = await axios.get(
      `https://onesweetbite.herokuapp.com/api/get-transaction`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setDatas(response.data.data.data);
  };
  // datas.map((data, i) => {
  //   console.log(i, data);
  // });
  // console.log(datas[0].cake.name);
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap flex-row justify-center m-3 gap-4 items-stretch">
        {datas.map((data, i) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl w-full lg:w-1/3"
              key={i}
            >
              <figure>
                <img src={data.cake.picturePath} className="w-44 h-44" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div className="alert alert-info shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current flex-shrink-0 w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>{data.status}</span>
                    </div>
                  </div>
                </div>
                <h2 className="card-title">{data.cake.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TransaksiPage;
