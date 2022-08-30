import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"; 
import App from './App';
import Weather from './components/Weather';
import Food from './components/Food';
import RecipeInfo from './components/RecipeInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <BrowserRouter>
     <Routes>
           <Route path="/" element={<App />} />
           <Route path="/food" element={<Food />} />
           <Route path="/:MealId" element={<RecipeInfo />} />
           <Route path="/weather" element={<Weather />} />
           
    </Routes>
       </BrowserRouter>
);