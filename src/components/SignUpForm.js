import {Row, Alert} from "react-bootstrap";
import '../App.css';
import { useState } from "react";
function SignUpForm () {
    const goToPage = () => {
        window.location.href = "/"
    }

    const [values, setValues] = useState ({
        email: '',
        userName: '',
        password: '',
    })

    const [showAlert, setShowAlert] = useState(false);

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting values:", values);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1500);
        setTimeout(() => goToPage(), 1500);
    }
    return (
    <>
    <Row className="justify-content-center">
        <form className="bg-light py-5 forms col-4"onSubmit={handleSubmit}>
            <label
                htmlFor="email">
                Enter Your Email
            </label>
            <input
                className="my-2 selected"
                type="email"
                name="email"
                placeholder='"Mimi21@gmail.com"'
                required
                onChange={(e) => {handleChanges(e)}}>
            </input>
            <label
                htmlFor="userName">
                Enter Your User Name
            </label>
            <input
                className="my-2 selected"
                type="text"
                name="userName"
                id="userName"
                minLength={3}
                placeholder='"Mimi21"'
                required
                onChange={(e) => {handleChanges(e)}}>
            </input>
            <label
                htmlFor="password">
                Enter Your Password
            </label>
            <input
                className="my-2 selected"
                type="password"
                name="password"
                id="password"
                minLength={8}
                maxLength={20}
                required
                onChange={(e) => {handleChanges(e)}}>
            </input>
            <input
                name="submit"
                className="mt-4 submitBtn"
                type="submit"
                value="Sign Up"
                aria-label="on click"
                required>
                </input>

        </form>
    </Row>
    <Row className="justify-content-center">
    {showAlert && (
        <Alert
            className="mt-4 alerts justify-self-center"
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible>
            Successfully Signed Up!
        </Alert>)}
    </Row>
    </>
    )
}

export default SignUpForm;