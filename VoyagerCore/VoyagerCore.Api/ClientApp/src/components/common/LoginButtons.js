import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

function LoginButtons() {
  return (
    <div id="singupbuttons">
      <Link to="login">
        <button id="loginbuttons" type="button" class="btn btn-primary btn-sm">
          Giriş
        </button>
      </Link>
      <Link to="signup">
        <button
          id="loginbuttons"
          type="button"
          class="btn btn-secondary btn-sm"
        >
          Üye Ol
        </button>
      </Link>
    </div>
  );
}
export default LoginButtons;
