const ProductAddButtons = ({ min = 0, max = 10, value, onChange }) => (
  <div style={{ display: "flex", gap: 5, alignSelf: "center" }}>
    <button disabled={value <= min} onClick={() => onChange(value - 1)}>
      -
    </button>
    {value}

    <button disabled={value >= max} onClick={() => onChange(value + 1)}>
      +
    </button>
  </div>
);

export default ProductAddButtons;
