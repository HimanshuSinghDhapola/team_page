import React from "react";
import "./Card.css";

export default function Card(props){
    let name, post, buttonTxt;
    if(props.name !== undefined){
        name = props.name;
    }
    if(props.post !== undefined){
        post = props.post;
    }
    if(props.button !== undefined){
        buttonTxt = props.button; 
    }
    return(
        <div className="card">
            <div className="img">
                <img className={`${props.isProfileImage?"profile-image":"image"}`} src={props.coverImg} alt="card"></img>
            </div>
            <div className="card--text">
                {name && <h2 className="name">{name}</h2>}
                {post && <p className="name">{post}</p>}
                <h3 className="uni">{props.uni}</h3>
                {buttonTxt && (
                    <div className="btn--align">
                            <button className="btn">
                                <span className="btn--text">{buttonTxt}</span>
                            </button>
                    </div>
                )}
            </div>
        </div>
    )
}