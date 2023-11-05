import React from "react";
import '../../assets/styles/Main/main.css';
import WhoAreWe from "./WhoAreWe";
import manWithPhone from '../../assets/images/man-with-phone.png'


const Main = () => {
    return (
        <div>
            <div className="content">
                <div className="latestProductCOnt">
                    <WhoAreWe />
                </div>
            </div>
        </div>
    );
}

export default Main;