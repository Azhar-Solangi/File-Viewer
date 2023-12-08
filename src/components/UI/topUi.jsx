import React from "react";
import image1 from '../../assets/images/bg1.png';
import logo from '../../assets/images/Gamizign-logo-adobe-com-Trans-1080p.png';

const UserInterface =()=>{

    return(
        <>
        <div>
        <div className="position-relative">
        <img className="img-fluid position-absolute top-0 start-0" width={130} src={logo} alt="bg" />
            <img className="img-fluid"  src={image1} alt="bg" />
        </div>
        </div>
       

        </>
    )
};

export default UserInterface;

