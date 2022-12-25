import React, { useState } from "react";
import "./ButtonLayout.css";
import Button from "@mui/material/Button";
import axios from "axios";

const ButtonLayout = () => {
  const [data, setData] = useState([]);

  const onButtonClick = (e) => {
    console.log("e", e.target.value);
    if (e.target.value === "firstButton") {
      axios({
        method: "post",
        url: "/api/v1/fetch",
        data: { fetchApi: 1 },
      }).then((res) => {
        const resData = res.data;
        setData(resData.data.Search);
      });
    } else if (e.target.value === "secondButton") {
      axios({
        method: "post",
        url: "/api/v1/fetch",
        data: { fetchApi: 2 },
      }).then((res) => {
        const resData = res.data;
        setData(resData.data.Search);
      });
    } else {
      axios({
        method: "post",
        url: "/api/v1/fetch",
        data: { fetchApi: 3 },
      }).then((res) => {
        const resData = res.data;
        setData(resData.data.Search);
      });
    }
  };
  return (
    <>
  
    <div className="container">
      <Button
        variant="contained"
        value="firstButton"
        onClick={(e) => onButtonClick(e)}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        value="secondButton"
        onClick={(e) => onButtonClick(e)}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        value="thirdButton"
        onClick={(e) => onButtonClick(e)}
      >
        Contained
      </Button>
    </div>
    </>
  );
};

export default ButtonLayout;
