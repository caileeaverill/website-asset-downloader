import React from 'react'

export default function FileExtensionSelection({ fileType, formats }) {

    const matchedFormat = formats[fileType];

    return (
        <div className='flex flex-col ml-8'>
            {matchedFormat.map((fileType) => (
                <span key={fileType.name}>
                    {fileType.extensions
                        .map((extension) => `.${extension}`)
                        .join(" ")}
                </span>
            ))}
        </div>
    );
}