export default function Para({ children, align }) {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: align }}>{children}</div>
    )
}
