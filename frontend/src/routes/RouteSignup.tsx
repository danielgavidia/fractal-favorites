import AuthForm from "../components/AuthForm";

const RouteSignup = () => {
	return (
		<div className="w-full h-full">
			<AuthForm authOperation="signup" />
		</div>
	);
};

export default RouteSignup;
