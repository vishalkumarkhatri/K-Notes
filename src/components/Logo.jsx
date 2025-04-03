import { p } from "framer-motion/client";
import React from "react";
// import logo from "../assets/logo.png";
import icon from "../assets/images/icon.png"

function Logo({ width = '100px' }) {
    return (
        <>
            <img src={icon} alt="logo" width={width} className="inline-block" />
            <h4 className='font-semibold text-center inline-block'>KHATRI NOTES</h4>
        </>
    )
}


export default Logo;