

const ListStyle = ({ title, value, onchange }) => {
  const listStyles = ["none", "disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-roman", "upper-roman", "lower-greek", "lower-latin", "upper-latin", "armenian", "georgian", "lower-alpha", "upper-alpha"];

  return (
    <>
      <label className="text-sm">{title}</label>
      <select
        style={{
          width: "100%",
          marginTop: "8px",
          border: "1px solid #C8C8C8",
          padding: "4px 6px",
          borderRadius: "5px",
          outline: "none",
        }}
        value={value}
        onChange={(event) => onchange(event.target.value)}
      >
        {listStyles.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default ListStyle;
