import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Switch from "react-switch";
import Select from "react-select";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

//css
//   import '../css/modern.css';

import "bootstrap/dist/css/bootstrap.min.css";
import UserNavBar from "../components/UserNavBar.js";
import UserFooter from "../components/UserFooter.js";

import { FaMoneyBillAlt, FaBusAlt, FaBusinessTime } from "react-icons/fa";
import { IconContext } from "react-icons";

import topupImage from "../img/topup.png";

export default function UserShedule() {
  return (
    <div class="wrapper">
      <UserNavBar />
      <div class="main">
        <main class="content">
          <div class="container-fluid">
            <div class="header">
              <h1 class="header-title">Create Schedule</h1>
            </div>

            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputVehicleType">Select Bus</label>
                      <input
                        type="text"
                        class="form-control"
                        name="identification"
                        required
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="inputCapacity">Enter the times </label>
                      <input
                        type="text"
                        class="form-control"
                        name="identification"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="btn  btn-primary"
                    id="addVehicle"
                    style={{
                      backgroundColor: "#081E3D",
                      borderColor: "#081E3D",
                      color: "#fff",
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    class="btn  btn-primary"
                    id="addVehicle"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#081E3D",
                      color: "#081E3D",
                      marginLeft: 10,
                      width: 75,
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
