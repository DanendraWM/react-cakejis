import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
const Menu = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      "https://onesweetbite.herokuapp.com/api/get-cake/"
    );
    // console.log(response);
    setDatas(response.data.data.data);
  };
  const filtered = !search
    ? datas
    : datas.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <>
      <div className="relative w-5/6 mx-auto my-3">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cari Cake..."
          required
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 m-4">
        {filtered.map((data, i) => {
          return (
            <div
              className="card card-compact lg:w-96 bg-base-100 shadow-xl"
              key={data.id}
            >
              <figure className="w-full h-44">
                <img src={data.picturePath} />
              </figure>
              <div className="card-body">
                <Rating name="read-only" value={parseInt(data.rate)} readOnly />
                <h2 className="card-title">{data.name}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/detail/${data.id}`}
                    className="btn btn-primary w-full"
                  >
                    pesan
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};
export default Menu;
