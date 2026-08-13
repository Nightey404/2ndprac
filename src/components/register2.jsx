import { useState } from "react";

import "../App.css";

function Register2() {
  const [firstname, setFirstname] = useState("");

  const onFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <hr />

      <div className="input-form">
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={onFirstnameChange}
          />
        </div>
      </div>

      <hr style={{ marginTop: "50px" }} />

      <div>
        <div className="input-form">
          <span style={{ marginRight: "50px" }}>First Name</span>
          <span>{firstname}</span>
        </div>
      </div>
    </div>
  );
}

export default Register2;
