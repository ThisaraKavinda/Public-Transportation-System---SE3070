import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Switch from "react-switch";
import Select from 'react-select'
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
  } from 'mdb-react-ui-kit';

import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavBar from '../components/UserNavBar.js';
import UserFooter from '../components/UserFooter.js';

import {FaMoneyBillAlt, FaBusAlt, FaBusinessTime}from 'react-icons/fa';
import { IconContext } from "react-icons";

import topupImage from '../img/topup.png';

export default function UserShedule() {

    return (
        <div>
            <UserNavBar />
                <div>
                    <div class="main" >
                        <main class="content">
                            <div class="container-fluid d-flex align-items-center justify-content-center my-5"> 
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card mb-5 shadow">
                                                <div class="card-body mt-3" style={{ margin: "0px" }}>
                                                    <div class="row d-flex align-items-center">
                                                        <div class="col-md-7 px-5">
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </main>
                    </div>
                    
                </div>
            <UserFooter />
        </div>
    )
}

