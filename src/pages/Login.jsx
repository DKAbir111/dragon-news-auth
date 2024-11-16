import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 py-7">
            <h3 className="text-center text-2xl font-semibold">Login your account</h3>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-3">
                    <button className="btn bg-[#403F3F] text-white">Login</button>
                </div>
            </form>
            <div>
                <h2 className="text-center">Dont’t Have An Account ? <Link to='/auth/register' className="text-red-500">Register</Link></h2>
            </div>
        </div>
    )
}
