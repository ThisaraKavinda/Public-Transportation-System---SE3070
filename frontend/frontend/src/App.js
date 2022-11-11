import './App.css';
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css";

import UserRegistration from './views/UserRegistation.js';
import UserLogin from './views/UserLogin.js';
import UserDashboard from './views/UserDashboard.js';
import UserAccount from './views/UserAccount.js';
import UserShedule from './views/UserShedule.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserRegistration />} />
        <Route exact path="/login" element={<UserLogin />} />
        <Route exact path='/dashboard' element={<UserDashboard />} />
        <Route exact path='/userAccount' element={<UserAccount />} />
        <Route exact path='/userShedule' element={<UserShedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
