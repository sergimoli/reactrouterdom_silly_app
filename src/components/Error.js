import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>
        <strong>this page does not exists, mother fucker!</strong>
      </p>
      {/* <a href="/start">get back</a> */}
      <Link to="/start">Get back!</Link>
    </div>
  );
}

export default Error;
