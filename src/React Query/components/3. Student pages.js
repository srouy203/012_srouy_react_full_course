import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { motion } from "framer-motion";

const StudentPages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <motion.div
      style={{ height: "100%", overflow: "auto" }}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{ y: -20, opacity: 0 }}>
      <div className="container">
        <h2 className="text-center">Student Page</h2>
        {loading && <h1>Loading...</h1>},
        <table className="table table-hover">
          <thead className="thead bg-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Sex</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map(({ id, name, sex, school }) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{sex}</td>
                      <td>{school}</td>
                    </tr>
                  );
                })
              : "Something went wrong..."}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default StudentPages;
