import React from "react";
import Card from "./Card";
import "./Card.css";
import mentorData from "../mentorData";
import mentorAdvisor from "../mentorAdvisor";
import "./Mentor.css";

export default function Mentor(){

    const mentorCards = mentorData.map((item) => {
        return(
            <Card
                {...item}
                isProfileImage = {true}
            />
        )
    })

    const mentorAdvisorsCards = mentorAdvisor.map((item) => {
        return(
            <Card
                {...item}
                isProfileImage = {true}
            />
        )
    })

    return(
        <div className="mentors">
            <h2>Meet the mentors</h2>
            <section className="cards-list">
                {mentorCards}
            </section>
            <h2 className="maCards">Mentor and Advisors</h2>
            <section className="cards-list maCards">
                {mentorAdvisorsCards}
            </section>
        </div>
    )
}