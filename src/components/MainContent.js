import React from "react";
import "./MainContent.css";
import Card from "./Card";
import uniData from "../uniData.js";

export default function MainContent(){

    const uniCards = uniData.map((item) => {
        return(
            <Card
                {...item}
                isProfileImage={false}
            />
        )
    })

    return(
        <div className="mainContent"> 
            <h2>Learn from scientists, research scholars from the top institutes in the world</h2>
            <section className="cards-list">
                {uniCards}
            </section>
        </div>
    )
}