import React from 'react';
import "./App.css";
import GlobalStyle from "./Components/GlobalStyle/GlobalStyle.js";
import LoginPage from "./Page/LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./Routes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {
          publicRoutes.map((route, index) =>{
            const Page = route.component ;
            return (
              <Route key={index}
                     path={route.path}
                     element = {
                                  <React.Fragment><Page /></React.Fragment>
                                    
                                 
                     }
              />
            )
          })
        }
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
