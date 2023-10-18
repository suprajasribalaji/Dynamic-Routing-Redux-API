import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDataSuccess, fetchDataError } from "../actions"; 

const Home = () => {
  const { apiData, error } = useSelector((state) => state.data);
  const { name } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = (apiAction) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/${apiAction}`;

    navigate(`/${apiAction}`); // Navigate to '/posts' when clicking the button

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };

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
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="w-5/6 h-5/6 bg-white flex space-x-4 rounded shadow-lg">
        <div className="w-1/4 border-r border-gray-400 p-6 pb-4 overflow-auto">
          <div className="text-xl font-bold mb-4 pb-8 pt-6">Fake API - API calls</div>
          <div className="space-y-4">
            
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                fetchData("posts"); // Navigate to '/posts' when clicking the button
              }}
            >
              Posts
            </button>

            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                fetchData("comments"); // Navigate to '/posts' when clicking the button
              }}
            >
              Comments
            </button>

            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                fetchData("albums"); // Navigate to '/posts' when clicking the button
              }}
            >
              Albums
            </button>

            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                fetchData("photos"); // Navigate to '/posts' when clicking the button
              }}
            >
              Photos
            </button>

            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                fetchData("todos"); // Navigate to '/posts' when clicking the button
              }}
            >
              Todos
            </button>

            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                fetchData("users"); // Navigate to '/posts' when clicking the button
              }}
            >
              Users
            </button>
            
          </div>
        </div>
        <div className="w-3/4 p-4 overflow-auto">
          <div className="text-xl font-bold mb-4 pb-8 pt-6">{name}
          </div>
          <div>
            {error && <div className="text-red-600">Error: {JSON.stringify(error.message, null, 2)}</div>}
            {apiData.map((data, index) => (
              <div key={index} className="border-b border-gray-400 pb-4 mb-4">
                {renderApiResponse(data)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
