import React from "react";
import "./User.css";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import NavBar from "../common/NavBar";

function UserLoginPage() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <div id="wrapper">
        <form class="form-signin">
          <div class="text-center mb-4">
            <img
              class="mb-4"
              src="../assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
          </div>

          <div class="form-label-group">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default UserLoginPage;
