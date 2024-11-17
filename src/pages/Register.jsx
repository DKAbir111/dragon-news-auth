import { useState, useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../components/Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()
    // State to manage error messages
    const [error, setError] = useState("");

    const handleCreateUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;

        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        // Check if password meets criteria
        if (!passwordRegex.test(password)) {
            setError(
                "Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
            );
            return;
        }

        setError(""); // Clear error if validation passes

        createUser(email, password)
            .then((result) => {
                console.log("User created successfully!", result);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
                console.error("Error creating user:", error.message);
            });
    };

    return (
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-sm mx-auto px-7 pt-7">
            <h3 className="text-center text-2xl font-semibold">Register your account</h3>
            <form className="card-body" onSubmit={handleCreateUser}>
                {/* Name Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                        name="name"
                        required
                    />
                </div>

                {/* Photo URL Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Photo URL"
                        name="photo"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter a secure password"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Display error message */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                {/* Terms & Conditions */}
                <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">Accept Terms & Conditions</span>
                    </label>
                </div>

                {/* Register Button */}
                <div className="form-control mt-3">
                    <button className="btn bg-[#403F3F] text-white">Register</button>
                </div>
            </form>
        </div>
    );
}
