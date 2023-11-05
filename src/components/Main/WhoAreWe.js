import React from 'react';
import '../../assets/styles/Main/WhoAreWe.css';
import logoBlack from '../../assets/images/logo-transparent.png';

const WhoAreWe = () =>{
    return (
        <div className='WhoAreWeCont'>
            <div className='IntroTextCont'>
                <h1 id='IntroHeading'>We are a forward-thinking enterprise, pioneering innovative solutions and data-driven insights</h1>
                <p id='introTextParagraph'>
                    Zero Overt Technologies Inc. is an innovative  company 
                    with a history of pioneering innovative solutions. Our mission is to empower businesses and 
                    individuals in the digital economy, guided by adaptability, customer focus, and excellence.
                </p>
            </div>

            <div className='WhoWeAreImage'>
                <img src={logoBlack} alt='zero overt technologies logo' id='logoTransparent'/>
            </div>
        </div>
    );
}

export default WhoAreWe;