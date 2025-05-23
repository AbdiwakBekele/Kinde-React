
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import KindeAuth from "@kinde-oss/kinde-auth-react";



const { KindeProvider } = KindeAuth;

import Home from './pages/Home';
import Profile from './pages/Profile';
import Callback from './pages/Callback';
import ProtectedRoute from './components/ProtectedRoute';


// import logo from './logo.svg';
// import './App.css';


const App = () => (
  <KindeProvider
    clientId="ad45f0414c9d4935869534a699c80829"
    domain="https://testabdiwak.kinde.com"
    logoutUri={window.location.origin}
    redirectUri={window.location.origin}
  >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </KindeProvider>
);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
