import React from "react";
import "./footer.css"
const Footer = () => {

    const reactImg = "./icons/react.png"
    const nodeImg = "./icons/nodejs.png"

    // const copyToClipboard = (text) => {
    //     navigator.clipboard.writeText(text);
    // };

    return (
        <footer>
            <div className="techUsed">
                <h2>Developed with: </h2>
                <img src={reactImg} alt="" height="35" width="35"/>
                <img src={nodeImg} alt="" height="35" width="35"/>
            </div>

            
        </footer>
        
    );
};

export default Footer;

/*
    <button
            onClick={() => copyToClipboard(person.email)}
            className="duEmail"
    >
*/