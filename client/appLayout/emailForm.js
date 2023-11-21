import ReactDOM from "react-dom";
import React, {useState} from "react";

function EmailForm(){
    const [email, setEmail] = useState('');
    const [submitted = true, setSubmitted] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('Submitted email:', email)
        try {
            await fetch("/data",{
                method: "POST",
                body: JSON.stringify({email}),
                headers: {
                    "content-type": "application/json",
                },
            });
            setSubmitted(submitted);
        } catch (error){
            console.error("Error", error);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type={"email"}
                className={"email"}
                placeholder={"tiketto@biznis.com"}
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                required
            />
            <input type={"submit"} value={"Subscribe"} className={"submit_button"}/>
        </form>
    );
}

export default EmailForm;