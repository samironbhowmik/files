import axios from "axios";
import React, { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // console.log(res.data);
    setData(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("working");
    // console.log(search);
    if (!search) {
      getData();
      return;
    }
    const filter = data.filter((item) => item.id === parseInt(search));
    setData(filter);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </form>
      <h1>Fetching data from API</h1>
      {data.map((user, id) => {
        return (
          <div key={id}>
            <p>Id: {user.id}</p>
            <p>Title: {user.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Api;
