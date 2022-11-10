import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import 'bootstrap/dist/css/bootstrap.min.css';

import loginImage from '../img/login1.png';

import { IconContext } from "react-icons";
import {MdPassword} from 'react-icons/md';
import {RiPassportFill} from 'react-icons/ri';

export default function UserLogin() {

    return (
        <section class="vh-100" style={{backgroundColor: "#7F8487"}}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11 my-5">
                    <div class="card text-black" style={{borderRadius: "25px"}}>
                    <div class="card-body p-md-4">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-10 col-lg-7 col-xl-6 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color: "#153462"}}>Login</p>

                                <form class="mx-1 mx-md-4">

                                <div class="d-flex flex-row align-items-start mb-2">
                                    <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                        <div class="mr-3 mt-2">
                                            <RiPassportFill />
                                        </div>
                                    </IconContext.Provider>
                                    <div class="form-outline flex-fill mb-0 ms-3">
                                        <input type="password" id="form3Example4cd" class="form-control" />
                                        <label class="form-label" for="form3Example4cd">Your NIC / Passport Number</label>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-start mb-2">
                                    <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                        <div class="mr-3 mt-2">
                                            <MdPassword />
                                        </div>
                                    </IconContext.Provider>
                                    <div class="form-outline flex-fill mb-0 ms-3">
                                        <input type="password" id="form3Example4c" class="form-control" />
                                        <label class="form-label" for="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor: "#153462"}}>Login</button>
                                </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-5 col-xl-5 d-flex align-items-center order-1 order-lg-2">

                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                class="img-fluid" alt="Sample image" /> */}

                                <img src={loginImage}
                                class="img-fluid" alt="Sample image" />

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        // <h1>Hello world</h1>
    )
}

