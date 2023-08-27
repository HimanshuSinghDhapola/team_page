import React from "react";
import Header from "./components/Header";
import Mentor from "./components/Mentor"
import MainContent from "./components/MainContent";
import "./App.css";

export default function App(){
    return(
        <div className="wrapper">
            <Header/>
            <MainContent/>
            <Mentor/>
        </div>
    )
}