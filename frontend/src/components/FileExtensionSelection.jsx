import React from 'react'

export default function FileExtensionSelection({ fileType, formats, checked }) {

    const matchedFormat = formats[fileType];

    return (
        <div className='flex flex-col ml-8'>
            {matchedFormat.map((fileType) => (
                <div className={checked ? "hidden" : ""} key={fileType.name}>
                    {fileType.extensions
                        .map((extension) => `.${extension}`)
                        .join(" ")}
                </div>
            ))}
        </div>
    );
}