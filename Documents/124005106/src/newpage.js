import { useEffect } from "react";
import "./newpage.css";

function Newpage() {
  return (
    <div className="App">
      <div>
        <div className="heading">RAILWAY TIMINGS</div>
        <div className="content">
          <div className="row">
            <div className="column" style={{ width: "70%" }}>
              <h2>Train Name</h2>
              <p>Some text..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newpage;
