import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavBar from '../views/UserNavBar.js';

export default function UserDashboard() {

    return (
        <div>
            <UserNavBar />
            <h1>Hello world</h1>
        </div>
    )
}

