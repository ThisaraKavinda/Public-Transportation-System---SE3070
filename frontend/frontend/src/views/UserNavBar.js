import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import 'bootstrap/dist/css/bootstrap.min.css';

import userImage from '../img/user.png';

export default function UserNavBar() {

    return (
        <nav class="navbar navbar-expand-lg py-3" style={{backgroundColor: "#3E6D9C"}}>
            <div class="container-fluid">
                <a class="navbar-brand px-2 fw-900 fs-4" href="#">RailTap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Shedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Travel History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Travel History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Travel History</a>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                </ul>
                {/* <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-primary" type="submit">Search</button>
                </form> */}
                <img src={userImage} alt="" class="img-fluid mx-3" style={{height: '35px', width:'35px'}}/>
                <button class="btn btn-primary">Logout</button>
                </div>
            </div>
        </nav>
    )
}

