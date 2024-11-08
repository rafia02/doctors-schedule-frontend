/* eslint-disable react-hooks/rules-of-hooks */
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { loginSuccess, loginFailure, loginStart, clearUser } from "../redux/feature/auth/authSlice";
import { store } from "../redux/store";
import { FirebaseError } from "firebase/app";



export const userSingUp = async (email:string, password:string) => {
      
      store.dispatch(loginStart())

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userData = {
            uid: user.uid,
            email: user.email,
        };
        store.dispatch(loginSuccess(userData));
    } catch (error) {
        const errorMessage = (error as FirebaseError).message;
        store.dispatch(loginFailure(errorMessage));
    }
}



export const userSingIn = async (email:string, password:string) => {

      store.dispatch(loginStart())

      try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const userData = {
            uid: user.uid,
            email: user.email,
        };

        store.dispatch(loginSuccess(userData))
      }catch(error){
        const errorMessage = (error as FirebaseError).message;
        store.dispatch(loginFailure(errorMessage)) 
      }

}



export const logout = async () => {
    try {
        await signOut(auth);
        store.dispatch(clearUser());
    } catch (error) {
        const errorMessage = (error as FirebaseError).message
        store.dispatch(loginFailure(errorMessage))
    }
  };


export const monitorAuthState = () => {
    onAuthStateChanged(auth, (user) =>{
        

        if(user){
            const userData = {
                uid: user.uid,
                email: user.email,
            };

            store.dispatch(loginSuccess(userData))
        }else{
            store.dispatch(clearUser())
        }
    })
}