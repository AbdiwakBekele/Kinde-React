
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import KindeAuth from '@kinde-oss/kinde-auth-react'; // ✅ default import



import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Callback from './pages/Callback';
// import ProtectedRoute from './components/ProtectedRoute';


// import logo from './logo.svg';
// import './App.css';


const { KindeProvider } = KindeAuth;

const App = () => (
  <KindeProvider
    clientId="ad45f0414c9d4935869534a699c80829"
    domain="https://testabdiwak.kinde.com"
    logoutUri='https://localhost:3000'
    redirectUri='https://localhost:3000'
  >

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
