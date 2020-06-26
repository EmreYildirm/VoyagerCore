import React from "react";
import "./User.css";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import NavBar from "../common/NavBar";

function SignUpPage() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <div id="wrapper">
        <form id="yourform">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="form-group">
            <label>First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="John"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="House"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-4"></div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
