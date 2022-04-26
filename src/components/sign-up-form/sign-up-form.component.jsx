import React, {useState, useContext} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component';
import { UserContext } from '../../contexts/user.context';

const defaultFormFiels =  {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
};

const SignUpFormComponent = () => {
    
const [formFields, setFormFields] = useState(defaultFormFiels);

const {displayName, email, password, confirmPassword} = formFields;
const {setCurrentUser} = useContext(UserContext);

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
        setCurrentUser(user);
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
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form method='POST' onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required  onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
}

export default SignUpFormComponent;
