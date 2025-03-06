const FileExtensionSelection = ({ extensions, isChecked }) => {
  return (
    <div className="pl-4">
      {extensions.map((format) => (
        <p
          key={format.name}
          className={isChecked ? "hidden" : ""} // Hide when checked, show when unchecked
        >
          {`.${
            format.extensions.length > 1
              ? format.extensions.join("  .")
              : format.extensions[0]
          }`}
        </p>
      ))}
    </div>
  );
};

export default FileExtensionSelection;
