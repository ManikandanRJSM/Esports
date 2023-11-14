import {useState} from "react"

const Organiser = () => {
    const [formData, setformData] = useState({
        email : '',
        password : '' 
    })
    const { email, password } = formData

    const onChange = (e) => {
        setformData((oldState) => ({
            ...oldState,
            [e.target.name] : [e.target.value]
        }))
    }

    const loginAction = (e) => {
        e.preventDefault()
    }
    return (
        <>

        <div className="container">
            <h3>ORGANISER LOGIN</h3>
            <form onSubmit = {loginAction}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="email" name="email" placeholder="Email" value= {email} onChange = {onChange}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="password" name="password" value= {password} placeholder="Password" onChange = {onChange}/>
                    </div>
                </div>

                <div className="row">
                    <input type = "submit" name = "login" value = "Login"/>
                </div>

            </form>
        </div>
        </>
    )
}

export default Organiser