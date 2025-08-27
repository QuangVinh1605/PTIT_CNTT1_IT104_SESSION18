import React, { useState, useCallback } from "react";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
      console.log("Color selected:", e.target.value);
    },
    []
  );

  return (
    <div className="color-picker-container">
      <h2>Color Picker</h2>

      {/* Input chọn màu */}
      <input type="color" value={color} onChange={handleChangeColor} />

      {/* Trước khi chọn màu */}
      {!color && <p>Chưa chọn màu nào</p>}

      {/* Sau khi chọn màu */}
      {color && (
        <div className="color-display" style={{ backgroundColor: color }}>
           {color}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
