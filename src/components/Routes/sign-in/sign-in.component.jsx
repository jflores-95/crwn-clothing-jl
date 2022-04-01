import React, {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../../utils/firebase.utils"
import SignUpFormComponent from '../../sign-up-form/sign-up-form.component';


const SignIn = () => {
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         if (response){
    //             const useDocRef = createUserDocumentFromAuth(response.user);

    //         }
    //       }
    //       fetchData();
    // }, []);


    const logGoogleUserPrompt = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }

    // const logGoogleRedirectUser = async () =>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user)
    // }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUserPrompt}>Sign in with google pop up</button>
            {/* <button onClick={logGoogleRedirectUser}>Sign in with google redirect</button> */}
            <SignUpFormComponent/>
        </div>
    );
}

export default SignIn;
