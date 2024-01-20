import React from "react";
import Navbar from "./navbar/navbar";
import BodyView from "./bodyView/bodyView";
import Footer from "./footer/footer";
import "../components/app.css"

const App = () =>{
    return (
        <div className="container_main">
            <Navbar />
            <BodyView />
            <Footer />
        </div>
    );
};

export default App;