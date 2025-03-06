import { useState } from "react";
import FileExtensionSelection from "./FileExtensionSelection";
import { FILE_FORMATS } from "../data/format";

export default function FileTypeSelection() {
  const [checkedState, setCheckedState] = useState(
    Object.keys(FILE_FORMATS).reduce((acc, key) => {
      acc[key] = true; // Initially all checked
      return acc;
    }, {})
  );

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    console.log(`${name} was ${checked ? "checked" : "unchecked"}`);
  };

  const selectAll = () => {
    const selectAllState = Object.keys(FILE_FORMATS).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setCheckedState(selectAllState);
  };

  const deselectAll = () => {
    const deselectAllState = Object.keys(FILE_FORMATS).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setCheckedState(deselectAllState);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Select file type(s)</h2>
      {Object.keys(FILE_FORMATS).map((key) => (
        <div key={key}>
          <h3 className="text-xl font-medium capitalize">
            <input
              className="mr-2"
              type="checkbox"
              name={key}
              checked={checkedState[key]}
              onChange={handleCheckboxChange}
            />
            {key}
          </h3>
          <FileExtensionSelection
            extensions={FILE_FORMATS[key]}
            isChecked={checkedState[key]}
          />
        </div>
      ))}
      <div className="flex gap-4 my-2">
        <button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={selectAll}
          type="button"
        >
          Select All
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={deselectAll}
          type="button"
        >
          Unselect All
        </button>
      </div>
    </div>
  );
}