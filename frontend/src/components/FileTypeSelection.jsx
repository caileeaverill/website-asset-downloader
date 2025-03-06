import { useState } from "react";
import FileExtensionSelection from "./FileExtensionSelection";
import Buttons from "./Buttons";
import { FILE_FORMATS } from "../data/format";

export default function FileTypeSelection() {

  const [checkedState, setCheckedState] = useState(
    Object.keys(FILE_FORMATS).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));;
  };

  const handleSelectAll = () => {
    const selectAllCheckedState = Object.keys(checkedState).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});


    setCheckedState(selectAllCheckedState);
  };

  const handleDeselectAll = () => {
    const deselectAllCheckedState = Object.keys(checkedState).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    setCheckedState(deselectAllCheckedState);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Select File Type</h2>
      {
        Object.keys(FILE_FORMATS).map((file => {
          return (
            <div className="flex flex-wrap items-center my-2" key={file}>
              <input
                className="mr-2 capitalize h-5 w-5"
                type="checkbox"
                name={file}
                checked={checkedState[file]}
                onChange={handleCheckboxChange}
              />
              <span className="capitalize">{file}</span>
              <FileExtensionSelection fileType={file} formats={FILE_FORMATS} checked={checkedState[file]} />
            </div>
          )
        }))
      }
      <div className="flex mt-4 gap-4">
        <Buttons className="bg-lime-700 hover:bg-lime-800" text="Select All" onClick={handleSelectAll} />
        <Buttons className="bg-rose-700 hover:bg-rose-800" text="Deselect All" onClick={handleDeselectAll} />
      </div>
    </div>
  );
}