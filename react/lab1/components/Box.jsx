const Box = ({ data, onClick }) => {
    return (
        <div onClick={onClick} style={{ border: "1px solid", padding: "0px 5px", fontSize: "1.5rem" }}>{data}</div>
    )
}

export default Box