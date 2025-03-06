import { useState } from "react";
import FileExtensionSelection from "./FileExtensionSelection";
import SelectionButtons from "./SelectionButtons";
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
            <div key={file}>
              <input
                className="mr-2 capitalize"
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
      <div className="flex my-2 gap-4">
        <SelectionButtons text="Select All" onClick={handleSelectAll} />
        <SelectionButtons text="Unselect All" onClick={handleDeselectAll} />
      </div>
    </div>
  );
}