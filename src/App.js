import './App.css';
import React, { useState } from "react";
import md5 from "md5";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    width: "250px",
    marginBottom: "15px",
    borderRadius: "8px",
  },
  convertButton: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  md5Text: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [md5Hash, setMd5Hash] = useState("");

  const convertToMd5 = () => {
    const hash = md5(inputValue);
    setMd5Hash(hash);
  };

  return (
    <div style={styles.container}>
      <h1>MD5 Hash Converter</h1>
      <input
        placeholder="Enter a value"
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
        style={styles.input} />
      <button
        onClick={convertToMd5}
        style={styles.convertButton}>
        Convert to MD5
      </button>
      {md5Hash !== "" && (
        <p style={styles.md5Text}>
          MD5 Hash: {md5Hash}
        </p>
      )}
    </div>
  );
}

export default App;