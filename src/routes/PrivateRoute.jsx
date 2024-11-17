import { useContext } from "react"
import PropTypes from "prop-types"
import { AuthContext } from "../components/Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-cente mt-20">
            <span className="loading loading-bars loading-md  bg-black"></span>
        </div>
    }
    if (user) {

        return children;
    }
    return (
        <Navigate to='/auth/login' state={location.pathname} />


    )
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}