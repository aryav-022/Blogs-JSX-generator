import Para from "./Para";

export default function Video({ src, align, height= "320", width= "240", autoplay }) {
    return (
        <Para align={align}>
            <video width={width} height={height} controls autoPlay={autoplay}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Para>
    )
}