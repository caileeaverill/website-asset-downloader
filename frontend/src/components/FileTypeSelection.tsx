import { useState } from "react";
import { FILE_FORMATS } from "../data/format";

export default function FileTypeSelection() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Select file type(s)</h2>
      {Object.keys(FILE_FORMATS).map((key) => (
        <div>
          <p className="capitalize">
            <input
              className="mr-2"
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            {key}
          </p>
          {FILE_FORMATS[key].map((format) => (
            <div className="hidden">
              <p>
                {`.${
                  format.extensions.length > 1
                    ? format.extensions.join("  .")
                    : format.extensions[0]
                }`}
              </p>
            </div>
          ))}
        </div>
      ))}
      <div className="flex gap-4 my-2">
        <button className="bg-blue-500 text-white py-2 px-4" type="button">
          Select All
        </button>
        <button className="bg-blue-500 text-white py-2 px-4" type="button">
          Unselect All
        </button>
      </div>
    </div>
  );
}
