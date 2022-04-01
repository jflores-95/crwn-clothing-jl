import React, {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const defaultFormFiels =  {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
};

const SignUpFormComponent = () => {
    
const [formFields, setFormFields] = useState(defaultFormFiels);

const {displayName, email, password, confirmPassword} = formFields;

const handleChange = (event) =>{
    const {name, value} = event.target; //Gets the name and value of the target and then set its values inside the state
    setFormFields({...formFields, [name]: value}) //in example: all the previews values and [displayName]: "ABC", 
}

const resetFormFields = () => {
    setFormFields(defaultFormFiels);
}

const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) 
    {
        alert("passwords doesn't match ") 
        return;
    }

    try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
    }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use');
        }else {
            console.error('User creation encountered an error', error);
        }
    }
 
    
}

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form method='POST' onSubmit={handleSubmit}>
                                
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>

                <label>Password</label>
                <input type="password" required  onChange={handleChange} name="password" value={password}/>

                <label>Confirm password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUpFormComponent;
