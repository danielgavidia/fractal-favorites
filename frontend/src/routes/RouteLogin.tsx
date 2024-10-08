import AuthForm from "../components/AuthForm";

const RouteLogin = () => {
	return (
		<div className="w-full h-full">
			<AuthForm authOperation="login" />
		</div>
	);
};

export default RouteLogin;
