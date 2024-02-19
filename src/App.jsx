import { useState } from "react";
import ClearInputButton from "./ClearInputButton";
import ProductAddButtons from "./ProductAddButtons";

function App() {
  const [value, setValue] = useState("");
  const [productQuantity, setPQuantity] = useState(0);
  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        gap: 10,
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <ClearInputButton value={value} onChange={setValue} placeholder="..." />
      <ProductAddButtons value={productQuantity} onChange={setPQuantity} />
    </div>
  );
}

export default App;
