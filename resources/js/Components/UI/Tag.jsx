export default function Tag({ data }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        padding: "5px 10px",
        border: "1px solid #c1c1c1",
      }}
    >
      <span>{data}</span>
    </div>
  );
}
