import { useState, useEffect } from 'react'
const Box = ({ data }) => {
    const [name, setName] = useState('Aaryan')
    const [email, setEmail] = useState('example@gmail.com')
    const [address, setAddress] = useState('Goa')
    const [showDefault, setshowDefault] = useState(false)

    useEffect(() => {
        if (name == "Aaryan") {
            setshowDefault(true)
            setAddress("Goa")
        } else {
            setshowDefault(false)
        }
    }, [name])

    const onReset = () => {
        setName("")
        setEmail("")
        setAddress("")
    }

    const onDefault = () => {
        setName("test")
        setEmail("test@gmail.com")
        setAddress("test address")
    }

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='address'>Address: </label>
                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <button onClick={onReset}>Reset</button>
                    {
                        showDefault ? <button onClick={onDefault}>Default</button> : ""
                    }
                </div>
            </div>
            <div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>address: {address}</div>
            </div>

        </div>
    )
}

export default Box