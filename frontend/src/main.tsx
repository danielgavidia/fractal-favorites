// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.tsx";
import RouteSearch from "./routes/RouteSearch.tsx";
import RouteDetails from "./routes/RouteDetails.tsx";
import RouteFavorites from "./routes/RouteFavorites.tsx";
import { AuthProvider } from "./firebase/AuthProvider.tsx";
import RouteLogin from "./routes/RouteLogin.tsx";
import RouteSignup from "./routes/RouteSignup.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <RouteSearch /> },
			{ path: "/login", element: <RouteLogin /> },
			{ path: "/signup", element: <RouteSignup /> },
			{ path: "/search", element: <RouteSearch /> },
			{ path: "/details/:movieId", element: <RouteDetails /> },
			{ path: "/favorites", element: <RouteFavorites /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	//   <StrictMode>
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
	//   </StrictMode>,
);
