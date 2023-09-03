import "./App.css";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   var axios = require("axios");
  //   var data = "";

  //   var config = {
  //     method: "post",
  //     url: "http://20.244.56.144/train/auth/",
  //     headers: {},
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });
  return (
    <div className="App">
      <div>
        <div className="heading">RAILWAY DISPLAY</div>
        <div className="content">
          <div
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
              border: "1px solid black",
              marginTop: "20px",
            }}
          >
            <h1>Train Name</h1>
          </div>
          <div
            style={{
              display: "flex",
              width: "20%",
              flexDirection: "column",
              marginTop: "20px",
              border: "1px solid black",
            }}
          >
            <h1>SC/AC</h1>
          </div>
          <div
            style={{
              display: "flex",
              width: "30%",
              flexDirection: "column",
              marginTop: "20px",
              border: "1px solid black",
            }}
          >
            <h1>50 seats</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
