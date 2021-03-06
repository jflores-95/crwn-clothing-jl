import React, {useState} from 'react';
import {  signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'
import Button from '../button/button.component';
const defaultFormFiels =  {
    email: '',
    password: '',
};

const SignInFormComponent = () => {
    
const [formFields, setFormFields] = useState(defaultFormFiels);

const { email, password} = formFields;

const handleChange = (event) =>{
    const {name, value} = event.target; //Gets the name and value of the target and then set its values inside the state
    setFormFields({...formFields, [name]: value}) //in example: all the previews values and [displayName]: "ABC", 
}

const resetFormFields = () => {
    setFormFields(defaultFormFiels);
}

const signInWithGoogle = async () => {
    await signInWithGooglePopup();
}

const handleSubmit = async (event) => {
    event.preventDefault();
 
    try{
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);
        resetFormFields();
    }catch(error){
        switch (error.code) {
            case 'auth/wrong-password':
                alert("Incorrect password");
                break;
            
            case 'auth/user-not-found':
                alert("No user associated with this email");
                break;
        
            default:
                console.log(error);
        }
        
    }
 
    
}

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form method='POST' onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required  onChange={handleChange} name="password" value={password}/>
                <div className='buttons-container'>
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
               
            </form>
        </div>
    );
}

export default SignInFormComponent;
