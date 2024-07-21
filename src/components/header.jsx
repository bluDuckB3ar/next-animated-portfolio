"use client";
import React, { useState } from "react";

const Header = () => {
    const [isDuckB3arVisible, setIsDuckB3arVisibility] = useState(true);

    const toggleDuckB3arVisibility = () => {
        setIsDuckB3arVisibility((prevIsVisible) => !prevIsVisible);
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                {/* Left side content */}
            </div>
            <div className="cursor-pointer" onClick={toggleDuckB3arVisibility}>
                {isDuckB3arVisible && <div>duck b3ar</div>}
            </div>
            <div className="flex items-center">
                {/* Right side content */}
            </div>
        </div>
    );
};

export default Header;


