import React from "react";
import FatalErrorImg from '../images/500.png'
import '../components/styles/Errors.css'

const FatalError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error 500: Unexpected Error!</h1>
        <img src={FatalErrorImg} alt="500 Unexpected Error" className="Error_Image"></img>
        
    </div>
)

export default FatalError