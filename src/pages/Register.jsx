import { useContext } from "react"
import { AuthContext } from "../components/Context/AuthContext"

export default function Register() {

    const { createUser } = useContext(AuthContext)
    const handleCreateUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)

    }
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 pt-7">
            <h3 className="text-center text-2xl font-semibold">Register your account</h3>
            <form className="card-body" onSubmit={handleCreateUser}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">Accept Term & Conditions</span>

                    </label>
                </div>
                <div className="form-control mt-3">
                    <button className="btn bg-[#403F3F] text-white">Register</button>
                </div>

            </form>
        </div>
    )
}
