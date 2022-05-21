import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Phone", key: "phone" },
  { label: "Email", key: "email" },
];

const App = () => {
  // const [data, setData] = useState([]);
  const [downloadedData, setDownloadedData] = useState([]);
  const csvDownloadRef = useRef(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axios
  //     .get("http://localhost:4000/users/get")
  //     .then(({ data }) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Error Happened");
  //     });
  // };

  const fetchDataToDownload = () => {
    axios
      .get("http://localhost:4000/users/get")
      .then(({ data }) => {
        window.open(data.downloadUrl, "blank");
      })
      .catch((error) => {
        console.log(error);
        alert("Error Happened");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* <CSVLink headers={headers} data={data} filename="simple_data.csv">
        <button className="btn btn-primary mb-2">Export</button>
      </CSVLink> */}
      {/* <CSVLink
        headers={headers}
        data={downloadedData}
        filename={"async_data.csv"}
        target="_blank"
        ref={csvDownloadRef}
      /> */}
      <button className="btn btn-success mb-2" onClick={fetchDataToDownload}>
        Export Async Data
      </button>
      {/* <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default App;
