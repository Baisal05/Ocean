import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Pages/Blog";
import About from "./components/Pages/About";
import { Not } from "./components/Pages/Not";
import { Layout } from "./components/Routs/Layout";
import { Home } from "./components/Pages/Home.js";
import { Animal } from "components/Animal";

import Login from "./components/contextSign/Login";
import SignUp from "./components/contextSign/SignUp";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import ProtectedRoute from "components/contextSign/ProtectedRoute";
// import { useState, useEffect } from "react";
 import { Video } from "./components/Video.js";



function App() {
  
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />

            <Route
              path="/animal"
              element={
                <ProtectedRoute>
                  <Animal />
                </ProtectedRoute>
              }
            />

             <Route
              path="/video"
              element={<Video/>}/> 

            <Route path="*" element={<Not />} />
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
