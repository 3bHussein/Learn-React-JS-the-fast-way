import React from "react";
// please make sure you right the file with proper name 
// import '../styles.ccs';
import '../styles.css';




export default function Footer(){
    const currentyear= new Date().getFullYear();

    return(
        
        <div className="footer">
   {/* <p className='footer'>Footder content here </p> */}
        
        <p className="foot-text">
            @{currentyear}@3B-moviedux, All Right reserved.
        </p>
        </div>
        
    );
}
