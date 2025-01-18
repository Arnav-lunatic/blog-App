import { useEffect, useState } from "react";
import { useAppDispatch } from "./store/store";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);

	const dispatch = useAppDispatch();

	useEffect(() => {
		authService.getCurrentUser().then((userData) => {
			if (userData) {
				dispatch(login(userData));
			} else {
				dispatch(logout());
			}
		}).finally(()=> {setLoading(false)})
	}, []);

	return (
		<div className="max-w-[1600px] m-auto">
			<Header/>
        <Outlet/>
      <Footer />
		</div>
	);
}

export default App;
