import Para from "./Para"

export default function File({ src, title, height = 400, width = 200, align }) {
  return (
    <Para align={align}>
      <iframe src={src} title={title} height={height} width={width}></iframe>
    </Para>
  )
}