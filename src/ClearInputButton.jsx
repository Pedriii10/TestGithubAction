const ClearInputButton = ({ value, onChange, ...otherProps }) => (
  <div>
    <input
      onChange={({ target: { value: newV } }) => onChange(newV)}
      value={value || ""}
      style={{ paddingRight: 25 }}
      data-testid="theInput"
      {...otherProps}
    />
    {value && (
      <button
        data-testid="clearButton"
        style={{ marginLeft: -24 }}
        onClick={() => onChange("")}
      >
        X
      </button>
    )}
  </div>
);

export default ClearInputButton;
