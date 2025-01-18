import authService from "../appwrite/auth";
import { useAppDispatch } from "../store/store";
import { logout } from "../store/authSlice";

export default function LogoutButton() {
	const dispatch = useAppDispatch();

	const handleClick = () =>
		authService.logout().then(() => dispatch(logout()));

    return <button className="bg-blue-900 w-fit px-4 py-1 rounded-lg" onClick={handleClick}>Logout</button>;
}
