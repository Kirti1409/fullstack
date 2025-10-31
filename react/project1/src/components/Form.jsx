import { useEffect, useState } from "react"
import { InputBx } from "./InputBx"
import Layout from "./Layout"

const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [division, setdivision] = useState("")
    const [studentclass, setstudentclass] = useState("")
    const [rollnumber, setrollnumber] = useState("")
    const [age, setage] = useState("")
    const [showData, setshowData] = useState(false)
    const [showEnter, setshowEnter] = useState("")

    useEffect(() => {
        if (name && email && address && division && studentclass && rollnumber && age) {
            setshowEnter(true)
        } else {
            setshowEnter(false)
        }
    }, [name, email, address, division, studentclass, rollnumber, age])

    const onEnter = () => {
        setshowData(true)
    }

    const onDefault = () => {
        setaddress("Pune")
        setdivision("A")
        setstudentclass("TYBCA")
        setrollnumber("123")
        setage("21")
        setemail("test@gmail.com")
    }

    const onReset = () => {
        setaddress("")
        setdivision("")
        setstudentclass("")
        setrollnumber("")
        setage("")
        setemail("")
    }

    return (
        <>
            <Layout>
                <h1>Form</h1>
                <InputBx label="Name" isError={name == ""} value={name} onChange={(e) => { setname(e.target.value) }} />
                <InputBx label="Email" isError={email == ""} value={email} onChange={(e) => { setemail(e.target.value) }} />
                <InputBx label="Address" isError={address == ""} value={address} onChange={(e) => { setaddress(e.target.value) }} />
                <InputBx label="Division" isError={division == ""} value={division} onChange={(e) => { setdivision(e.target.value) }} />
                <InputBx label="Class" isError={studentclass == ""} value={studentclass} onChange={(e) => { setstudentclass(e.target.value) }} />
                <InputBx label="Roll Number" isError={rollnumber == ""} value={rollnumber} onChange={(e) => { setrollnumber(e.target.value) }} />
                <InputBx label="Age" isError={age == ""} value={age} onChange={(e) => { setage(e.target.value) }} />
                <button onClick={onReset}>Reset</button>
                <button onClick={onDefault}>Default</button>
                {
                    showEnter ? <button onClick={onEnter}>Enter</button> : ""
                }
            </Layout>
            {
                showData ?
                    <div>
                        <h1>Results</h1>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Address: {address}</p>
                        <p>Division: {division}</p>
                        <p>Class: {studentclass}</p>
                        <p>Roll Number: {rollnumber}</p>
                        <p>Age: {age}</p>
                    </div> : ""
            }
        </>
    )
}

export { Form }