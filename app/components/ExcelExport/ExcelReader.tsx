import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelReader = ({ onDataLoaded }:any) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event:any) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (e:any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Read first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet to JSON using column headers
      const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      // Send the data back to parent
      if (onDataLoaded) {
        onDataLoaded(json);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h3>Upload Excel File</h3>

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
      />

      {fileName && <p>Loaded: <strong>{fileName}</strong></p>}
    </div>
  );
};

export default ExcelReader;
