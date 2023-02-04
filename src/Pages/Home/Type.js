import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Obstetricians and gynecologists",
                    "Neurologists",
                    "Radiologists",
                    "Anesthesiologists",
                    "Pediatricians",
                    "Cardiologists"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
