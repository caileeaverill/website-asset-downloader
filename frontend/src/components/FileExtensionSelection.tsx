interface FileExtensionSelectionProps {
  extensions: { name: string; extensions: string[] }[];
  isChecked: boolean; // Indicates whether the parent checkbox is checked
}

const FileExtensionSelection = ({
  extensions,
  isChecked,
}: FileExtensionSelectionProps) => {
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
