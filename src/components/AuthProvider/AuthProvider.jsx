import { AuthContext } from "../Context/AuthContext";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/Firebase.init";
export default function AuthProvider({ children }) {

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}