import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { useContext } from "react";
import { auth } from "../firebase/firebaseConfig";

const Root = () => {
	const authContext = useContext(AuthContext);
	if (!authContext) {
		return null;
	}
	const { user } = authContext;
	console.log(user);
	const handleSignOut = async () => {
		await auth.signOut();
	};
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen bg-primary-content">
			{/* Navbar */}
			<div className="navbar fixed bg-primary-content border-b-2 border-neutral-content flex text-neutral-content">
				<div className="flex-1 p-2">
					<button onClick={() => navigate("/")}>Fractal Favorites</button>
				</div>
				<div className="p-2">
					<button onClick={() => navigate("/login")}>Login</button>
				</div>
				<div className="p-2">
					<button onClick={() => navigate("/signup")}>Sign up</button>
				</div>
				<div className="p-2">
					<button onClick={() => navigate("/search")}>Search</button>
				</div>
				<div className="p-2">
					<button onClick={() => navigate("/favorites")}>Favorites</button>
				</div>
			</div>
			{/* Outlet */}
			<div className="w-full h-full pt-16">
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
