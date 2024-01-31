const NumberInput = ({ label, value, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <input type="number" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  };
  
  export default NumberInput;