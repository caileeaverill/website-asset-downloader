import { useState, useEffect } from "react";

export default function FileExtensionSelection({ fileType, formats, checked }) {
    const matchedFormat = formats[fileType];

    const [checkedExtension, setCheckedExtension] = useState({});

    useEffect(() => {
        const initialCheckedState = matchedFormat.reduce((acc, file) => {
            acc[file.name] = true;
            return acc;
        }, {});
        setCheckedExtension(initialCheckedState);
    }, [matchedFormat]);

    const handleExtensionCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckedExtension((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
        console.log(name)
    };

    return (
        <div className='flex flex-wrap w-full gap-4 my-2 ml-7'>
            {matchedFormat.map((fileType) => (
                <div className={checked ? "hidden" : ""} key={fileType.name}>
                    <span className='flex items-center'>
                        <input
                            className='mr-2'
                            type="checkbox"
                            name={fileType.name}
                            checked={checkedExtension[fileType.name] || false} // Default to false if undefined
                            onChange={handleExtensionCheckboxChange}
                        />
                        {fileType.extensions
                            .map((extension) => `.${extension}`)
                            .join(" ")}
                    </span>
                </div>
            ))}
        </div>
    );
}