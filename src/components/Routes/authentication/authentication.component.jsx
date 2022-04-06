import React, {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../../utils/firebase.utils"
import SignUpFormComponent from '../../sign-up-form/sign-up-form.component';
import SignInFormComponent from '../../sign-in-form/sign-in-form.component';
import './authentication.styles.scss'


const Authentication = () => {
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         if (response){
    //             const useDocRef = createUserDocumentFromAuth(response.user);

    //         }
    //       }
    //       fetchData();
    // }, []);


    // const logGoogleUserPrompt = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = createUserDocumentFromAuth(user);
    // }

    // const logGoogleRedirectUser = async () =>{
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user)
    // }

    return (
        <div className='authentication-container'>
             {/* <button onClick={logGoogleUserPrompt}>Sign in with google pop up</button> */}
            {/* <button onClick={logGoogleRedirectUser}>Sign in with google redirect</button> */}
            <SignInFormComponent/>
            <SignUpFormComponent/>
        </div>
    );
}

export default Authentication;
