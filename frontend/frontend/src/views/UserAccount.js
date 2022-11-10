import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Switch from "react-switch";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavBar from '../components/UserNavBar.js';
import UserFooter from '../components/UserFooter.js';

import {HiUserCircle} from 'react-icons/hi';
import {AiFillEdit} from 'react-icons/ai';
import { IconContext } from "react-icons";

export default function UserAccount() {

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
                                                    <div class="row d-flex align-items-center mb-4 mt-3">   
                                                        <div class="col-12 px-5">
                                                            <h2 class="fw-semibold">User Account</h2>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex align-items-center justify-content-between pe-4 mt-1">   
                                                        <div class="col-4 mx-auto">
                                                            <div class="row d-flex justify-content-end">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"300px" }}>
                                                                    <div class="px-5">
                                                                        <HiUserCircle />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div>  
                                                            <div class="row d-flex justify-content-center">
                                                                <h5 class="text-center fw-semibold">Permanant User</h5>
                                                            </div>   
                                                            <div class="row d-flex justify-content-center mb-3">
                                                                <h6 class="text-center">Joined Date: 2020/11/01</h6>
                                                            </div>                                                           
                                                        </div>
                                                        <div class="col-7 ps-3 pe-5">
                                                            {/* <div class="row d-flex justify-content-center">
                                                                <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"300px" }}>
                                                                    <div class="">
                                                                        <HiUserCircle />
                                                                    </div>
                                                                </IconContext.Provider>
                                                            </div> */}
                                                            <form>
                                                                <div class="mb-3">
                                                                    <label for="nic" class="form-label">NIC / Passport Number</label>
                                                                    <div class="row d-flex justify-content-between">
                                                                        <div class="col-11">
                                                                            <input type="text" class="form-control" id="nic" aria-describedby="emailHelp" />
                                                                        </div>
                                                                        
                                                                    </div>           
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="name" class="form-label">Name</label>
                                                                    <div class="row d-flex justify-content-between">
                                                                        <div class="col-11">
                                                                            <input type="text" class="form-control" id="name" />
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                                                                <div class="">
                                                                                    <AiFillEdit />
                                                                                </div>
                                                                            </IconContext.Provider>
                                                                        </div>
                                                                    </div>           
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                                    <div class="row d-flex justify-content-between">
                                                                        <div class="col-11">
                                                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                                                                <div class="">
                                                                                    <AiFillEdit />
                                                                                </div>
                                                                            </IconContext.Provider>
                                                                        </div>
                                                                    </div>           
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="mobileNumber" class="form-label">Mobile Number</label>
                                                                    <div class="row d-flex justify-content-between">
                                                                        <div class="col-11">
                                                                            <input type="text" class="form-control" id="mobileNumber" />
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                                                                <div class="">
                                                                                    <AiFillEdit />
                                                                                </div>
                                                                            </IconContext.Provider>
                                                                        </div>
                                                                    </div>           
                                                                </div>
{/*                                                                 
                                                                <div class="mb-3 form-check">
                                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                                </div>
                                                                <button type="submit" class="btn btn-primary">Submit</button> */}
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex align-items-center mb-4 mt-3 justify-content-between">   
                                                        <div class="col-12 px-5">
                                                            <form>
                                                                <div class="mb-3">
                                                                    <label for="address" class="form-label">Address</label>
                                                                    <div class="row d-flex justify-content-between">
                                                                        <div class="col-11">
                                                                            <input type="text" class="form-control" id="address" />
                                                                        </div>
                                                                        <div class="col-auto me-4">
                                                                            <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                                                                <div class="">
                                                                                    <AiFillEdit />
                                                                                </div>
                                                                            </IconContext.Provider>
                                                                        </div>
                                                                    </div>           
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex align-items-center mb-4 mt-3 justify-content-between">   
                                                        <div class="col-6 px-5">
                                                            <form>
                                                                <div class="mb-3">
                                                                    <label for="city" class="form-label">City</label>
                                                                    <div class="row d-flex justify-content-start">
                                                                        <div class="col-10">
                                                                            <input type="text" class="form-control" id="city" />
                                                                        </div>
                                                                        <div class="col-1">
                                                                            <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                                                                <div class="">
                                                                                    <AiFillEdit />
                                                                                </div>
                                                                            </IconContext.Provider>
                                                                        </div>
                                                                    </div>           
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-6 px-5">
                                                            <form>
                                                                <div class="mb-3">
                                                                    <label for="birthday" class="form-label">Birthday</label>
                                                                    <div class="row d-flex justify-content-between">
                                                                        <div class="col-10">
                                                                            {/* <input type="text" class="form-control" id="birthday" /> */}
                                                                            <DatePicker
                                                                                className="form-control"
                                                                                customInput={
                                                                                <input
                                                                                    type="text"
                                                                                    id="validationCustom01"
                                                                                    placeholder="First name"
                                                                                />
                                                                                }
                                                                            />
                                                                        </div>
                                                                        <div class="col-auto me-3">
                                                                            <IconContext.Provider value={{ color: "#153462", className: "global-class-name w-4", size:"25px" }}>
                                                                                <div class="">
                                                                                    <AiFillEdit />
                                                                                </div>
                                                                            </IconContext.Provider>
                                                                        </div>
                                                                    </div>           
                                                                </div>
                                                            </form>
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

