const InputBx = ({ label, value, onChange, isError = false }) => {
    return (
        <div>
            <label>{label}</label>
            <input style={{ border: isError ? "1px solid red" : "1px solid black" }} type="text" value={value} onChange={onChange} />
        </div>
    )
}

export { InputBx }