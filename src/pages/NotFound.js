import React from "react";
import NotFounding from '../images/404.png'
import '../components/styles/Errors.css'

const NotFound = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error 404: Page Not Found!</h1>
        <img src={NotFounding} alt="404 NotFound" className="Error_Image"></img>
        
    </div>
)

export default NotFound