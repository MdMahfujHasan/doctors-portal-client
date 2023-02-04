import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Bathroom and Toilet Cleaning",
                    "Home Interior Design",
                    "Personal Chef",
                    "Electronics Repair",
                    "Home Cleaning",
                    "Car Repair"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
