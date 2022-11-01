import Para from './Para';

export default function Image({ src, alt="", height=280, width=280, align="center" }) {
    return (
        <Para align={align}>
            <img src={src} alt={alt} height={height} width={width} />
        </Para>
    )
}
