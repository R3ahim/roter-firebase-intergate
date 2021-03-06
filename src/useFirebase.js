import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app)
const googlPerovider = new GoogleAuthProvider();
const useFireBase = () => {
    const [user, setUser] = useState({})



    const singWithGoogle = () => {
        signInWithPopup(auth, googlPerovider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)

            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut =  ()=>{
        signOut(auth)
        .then(()=>{

        })
    }
  useEffect(()=>{
      onAuthStateChanged(auth,user=>{
          setUser(user);
 
      })
  })
    return {
        user,
        singWithGoogle,
        handleSignOut,
    }
}
export default useFireBase;