import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Switch from "react-switch";

import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavBar from '../components/UserNavBar.js';
import UserFooter from '../components/UserFooter.js';

import {FaMoneyBillAlt, FaBusAlt, FaBusinessTime}from 'react-icons/fa';
import { IconContext } from "react-icons";

import topupImage from '../img/topup.png';

export default function UserDashboard() {

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
                                                            <div class="row fs-2">
                                                                <h3 class="mb-2 fs-bold">Hello Thisara!</h3>
                                                            </div>

                                                            <div class="row my-2 d-flex justify-content-between">
                                                                <div class="col-7">
                                                                    <h2 class="mb-2 fs-bold h1"><strong>Account balance: </strong></h2>
                                                                </div>
                                                                <div class="col-5 d-flex justify-content-end">
                                                                    <h2 class="mb-2 fs-bold h1 text-success monospace fw-900"><strong>Rs. 5250.00 </strong></h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5">
                                                            <div class="row m-3 h-75">
                                                                <a>
                                                                <div class="container-12 mx-6 d-flex justify-content-center align-items-center h-100 rounded py-4" 
                                                                style={{ backgroundColor: "#153462" }} id="makeOrder">
                                                                    <div class="col-2">
                                                                        <img class="img-fluid mx-3" src={topupImage}></img>
                                                                    </div>
                                                                    <div class="col-6 mx-4 d-flex justify-content-center align-items-center fw-semibold fs-4 px-3 text-white">
                                                                        <p>Top Up Account</p>
                                                                    </div>
                                                                </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row d-flex justify-content-between">
                                        <div class="col-7">
                                            <div class="card mt-4 shadow">
                                                <div class="card-body mt-3" style={{ margin: "0px" }}>
                                                    <div class="row d-flex align-items-center justify-content-start mb-5 mx-4 mt-3">
                                                        <div class="col-auto d-flex justify-content-center">
                                                            <h5 class="mb-2 fw-semibold">Scan the following QR code to checkin or checkout from the bus</h5>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row d-flex align-items-center justify-content-center mb-4">
                                                        <div class="col-6 d-flex justify-content-center">
                                                        <QRCode
                                                            size={200}
                                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                            value={"hey"}
                                                            viewBox={`0 0 200 200`}
                                                        />
                                                        </div>                                                 
                                                    </div>
                                                    <div class="row d-flex align-items-center justify-content-center mb-4">
                                                        <div class="col-auto d-flex justify-content-center">
                                                            <h5 class="fs-bold">dsf61sf6166sfergf616ggd61</h5>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <div class="row">
                                                <div class="card mt-4 shadow">
                                                    <div class="card-body mt-3" style={{ margin: "0px" }}>
                                                        <div class="row mx-0 d-flex justify-content-between align-items-center mb-4">
                                                            <div class="col-8">
                                                                <h6 class="mb-0 fw-semibold">Your recent rides</h6>
                                                            </div>
                                                            <div class="col-auto">
                                                                <button type="button" class="btn text-white fw-semibold" 
                                                                style={{ backgroundColor: "#153462" }}>See All</button>
                                                            </div>
                                                        </div>

                                                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                                                            <div class="col-2">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"30px" }}>
                                                                    <div class="mr-3 mt-2">
                                                                        <FaBusAlt />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>
                                                            <div class="col-4 d-flex justify-content-start">
                                                                <p class="mb-0 fw-semibold">NA - 4866</p>
                                                            </div>
                                                            <div class="col-6 justify-content-end">
                                                                <p class="mb-0 fw-semibold text-end">154/2</p>
                                                            </div>
                                                        </div>

                                                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                                                            <div class="col-2">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"30px" }}>
                                                                    <div class="mr-3 mt-2">
                                                                        <FaBusAlt />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>
                                                            <div class="col-4 d-flex justify-content-start">
                                                                <p class="mb-0 fw-semibold">NA - 4866</p>
                                                            </div>
                                                            <div class="col-6 justify-content-end">
                                                                <p class="mb-0 fw-semibold text-end">154/2</p>
                                                            </div>
                                                        </div>

                                                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                                                            <div class="col-2">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"30px" }}>
                                                                    <div class="mr-3 mt-2">
                                                                        <FaBusAlt />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>
                                                            <div class="col-4 d-flex justify-content-start">
                                                                <p class="mb-0 fw-semibold">NA - 4866</p>
                                                            </div>
                                                            <div class="col-6 justify-content-end">
                                                                <p class="mb-0 fw-semibold text-end">154/2</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="card mt-4 shadow">
                                                    <div class="card-body mt-3" style={{ margin: "0px" }}>
                                                        <div class="row mx-0 d-flex justify-content-between align-items-center mb-4">
                                                            <div class="col-8">
                                                                <h6 class="mb-0 fw-semibold">Your recent routes</h6>
                                                            </div>
                                                            <div class="col-auto">
                                                                <button type="button" class="btn text-white fw-semibold" 
                                                                style={{ backgroundColor: "#153462" }}>See All</button>
                                                            </div>
                                                        </div>

                                                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                                                            <div class="col-2">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"30px" }}>
                                                                    <div class="mr-3 mt-2">
                                                                        <FaBusinessTime />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>
                                                            <div class="col-3 d-flex justify-content-start">
                                                                <p class="mb-0 fw-semibold">152</p>
                                                            </div>
                                                            <div class="col-7 justify-content-end">
                                                                <p class="mb-0 fw-semibold text-end">Kollupitiya - Panadura</p>
                                                            </div>
                                                        </div>

                                                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                                                            <div class="col-2">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"30px" }}>
                                                                    <div class="mr-3 mt-2">
                                                                        <FaBusinessTime />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>
                                                            <div class="col-3 d-flex justify-content-start">
                                                                <p class="mb-0 fw-semibold">152</p>
                                                            </div>
                                                            <div class="col-7 justify-content-end">
                                                                <p class="mb-0 fw-semibold text-end">Kollupitiya - Panadura</p>
                                                            </div>
                                                        </div>

                                                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                                                            <div class="col-2">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"30px" }}>
                                                                    <div class="mr-3 mt-2">
                                                                        <FaBusinessTime />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>
                                                            <div class="col-3 d-flex justify-content-start">
                                                                <p class="mb-0 fw-semibold">152</p>
                                                            </div>
                                                            <div class="col-7 justify-content-end">
                                                                <p class="mb-0 fw-semibold text-end">Kollupitiya - Panadura</p>
                                                            </div>
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

