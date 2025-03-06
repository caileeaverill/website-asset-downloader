import React from "react";

export default function Buttons({ text, onClick, className }) {

    return (
        <>
            <button
                type="button"
                className={`text-white rounded ${className}`}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
}
