import React from "react";

function Logo({ width = '100px' }) {
    return (
        <div>
            <img src="../assests/logo/logo.png" alt="Logo" width={width} />
        </div>
    )
}


export default Logo;