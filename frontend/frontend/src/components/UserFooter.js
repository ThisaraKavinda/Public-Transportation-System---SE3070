import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import {FaTwitter, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {AiFillHome, AiFillPrinter} from 'react-icons/ai';
import {GrMail} from 'react-icons/gr';
import {BsFillTelephoneFill} from 'react-icons/bs';
import { IconContext } from "react-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import userImage from '../img/user.png';

export default function UserFooter() {

    return (
        <footer class="text-center text-lg-start text-muted" style={{backgroundColor: "#153462"}}>
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div class="me-5 d-none d-lg-block text-light">
                <span>Get connected with us on social networks:</span>
                </div>
                <div class="d-flex">
                    <a href="" class="me-4 text-reset">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                            <div>
                                <FaFacebookF />
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="" class="me-4">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                            <div>
                                <FaTwitter />
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                            <div>
                                <FaGoogle />
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                            <div>
                                <FaInstagram />
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                            <div>
                                <FaLinkedinIn />
                            </div>
                        </IconContext.Provider>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                            <div>
                                <FaGithub />
                            </div>
                        </IconContext.Provider>
                    </a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4 text-light">
                        <i class="fas fa-gem me-3"></i>RailTap
                    </h6>
                    <p class="text-light">
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4 text-light">
                        Products
                    </h6>
                    <p>
                        <a href="#!" class="text-light">Angular</a>
                    </p>
                    <p>
                        <a href="#!" class="text-light">React</a>
                    </p>
                    <p>
                        <a href="#!" class="text-light">Vue</a>
                    </p>
                    <p>
                        <a href="#!" class="text-light">Laravel</a>
                    </p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4 text-light">
                        Useful links
                    </h6>
                    <p>
                        <a href="#!" class="text-light">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" class="text-light">Settings</a>
                    </p>
                    <p>
                        <a href="#!" class="text-light">Orders</a>
                    </p>
                    <p>
                        <a href="#!" class="text-light">Help</a>
                    </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4 text-light">Contact</h6>
                        <div class="d-flex">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                                <div>
                                    <AiFillHome />
                                </div>
                            </IconContext.Provider>
                            <p class="text-light px-3">
                                New York, NY 10012, US
                            </p>
                        </div>
                        <div class="d-flex">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                                <div>
                                    <GrMail />
                                </div>
                            </IconContext.Provider>
                            <p class="text-light px-3">
                                info@example.com
                            </p>
                        </div>
                        <div class="d-flex">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                                <div>
                                    <BsFillTelephoneFill />
                                </div>
                            </IconContext.Provider>
                            <p class="text-light px-3">
                                + 01 234 567 88
                            </p>
                        </div>
                        <div class="d-flex">
                            <IconContext.Provider value={{ color: "white", className: "global-class-name w-4", size:"20px" }}>
                                <div>
                                    <AiFillPrinter />
                                </div>
                            </IconContext.Provider>
                            <p class="text-light px-3">
                                + 01 234 567 88
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <div class="text-center p-4 text-light" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2022 Copyright : 
                <a class="text-reset fw-bold text-light" href="https://mdbootstrap.com/">RailTap.com</a>
            </div>
        </footer>
    )
}

