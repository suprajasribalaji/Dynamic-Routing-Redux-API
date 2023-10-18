import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataSuccess, fetchDataError } from "../actions";
import Home from "./home";

const Endpoint = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { apiData, error } = useSelector((state) => state.data);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/${name}`;

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  }, [name, dispatch]);

  const renderApiResponse = (data) => {
    return (
      <div>
        {Object.keys(data).map((key, index) => (
          <div key={index} className="pb-2 mb-2">    
            <div className="text-lg font-bold mb-2">{key}</div>
            <div className="text-gray-600">{JSON.stringify(data[key])}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
        <div>
            <Home/>
        </div>
        <div>
            <h1>{name}</h1>
            {error && <div className="text-red-600">Error: {JSON.stringify(error.message, null, 2)}</div>}
            {apiData.map((data, index) => (
                <div key={index} className="border-b border-gray-400 pb-4 mb-4">
                    {renderApiResponse(data)}
                </div>
            ))}
        </div>
    </div>
  );
};

export default Endpoint;
