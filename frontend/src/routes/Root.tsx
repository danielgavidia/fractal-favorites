import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen">
			{/* Navbar */}
			<div>
				<div>
					<button onClick={() => navigate("/")}>Fractal Favorites</button>
				</div>
				<div>
					<button onClick={() => navigate("/search")}>Search</button>
				</div>
				<div>
					<button onClick={() => navigate("/favorites")}>Favorites</button>
				</div>
			</div>
			{/* Outlet */}
			<div className="w-full h-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
