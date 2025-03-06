import React from "react";

export default function SelectionButtons({ text, onClick }) {

    return (
        <>
            <button
                type="button"
                className="bg-lime-700 hover:bg-lime-800 text-white rounded"
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
}
