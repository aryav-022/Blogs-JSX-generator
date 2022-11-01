import Para from "./Para";

export default function Heading({ align }) {
  return (
    <Para align={align}>
        <h2 contentEditable="true" style={{ fontSize: "40px", borderBottom: "1px solid gray", width: "100%", paddingBottom: "7px", margin: "20px 0" }}>Heading</h2>
    </Para>
  )
}
