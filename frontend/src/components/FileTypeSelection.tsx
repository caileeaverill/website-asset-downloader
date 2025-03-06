import { useState } from "react";
import { FILE_FORMATS } from "../data/format";

interface CheckboxState {
  [key: string]: boolean;
}

export default function FileTypeSelection() {
  const [checkedState, setCheckedState] = useState<CheckboxState>(
    Object.keys(FILE_FORMATS).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as CheckboxState)
  );

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Select file type(s)</h2>
      {Object.keys(FILE_FORMATS).map((key) => (
        <div key={key}>
          <p className="capitalize">
            <input
              className="mr-2"
              type="checkbox"
              name={key}
              checked={checkedState[key]}
              onChange={handleCheckboxChange}
            />
            {key}
          </p>
          {FILE_FORMATS[key].map((format) => (
            <div key={format.name} className="hidden">
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
