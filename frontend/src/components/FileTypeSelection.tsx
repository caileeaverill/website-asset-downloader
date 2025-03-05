import { FILE_FORMATS } from "../data/FILE_FORMATS";

export default function FileTypeSelection() {
  return (
    <>
      {Object.keys(FILE_FORMATS).map((key) => (
        <div>
          <h1>{key}</h1>
          {FILE_FORMATS[key].map((format) => (
            <div>
              <p>
                {`.${
                  format.extensions.length > 1
                    ? format.extensions.join(", ")
                    : format.extensions[0]
                }`}
              </p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
