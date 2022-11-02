import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserLogin() {

    return (
        <section class="vh-100" style={{backgroundColor: "#eee"}}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11 my-5">
                    <div class="card text-black" style={{borderRadius: "25px"}}>
                    <div class="card-body p-md-4">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-primary">Login</p>

                                <form class="mx-1 mx-md-4">

                                <div class="d-flex flex-row align-items-center mb-2">
                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" class="form-control" />
                                    <label class="form-label" for="form3Example4cd">Your NIC / Passport Number</label>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-2">
                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" class="form-control" />
                                    <label class="form-label" for="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" class="btn btn-primary btn-lg">Login</button>
                                </div>

                                </form>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
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

