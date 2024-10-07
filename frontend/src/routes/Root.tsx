import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
	const navigate = useNavigate();
	return (
		<div>
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
			<Outlet />
		</div>
	);
};

export default Root;
