import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

export default function Header() {
	const authStatus = useAppSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const navItems = [
		{
			name: "Home",
			slug: "/",
			active: true,
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus,
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Post",
			slug: "/all-post",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	];

	return (
		<div className="text-lg w-fit px-4 py-1">
			<nav className="flex">
				<ul className="flex ml-auto">
					{navItems.map((item) =>
						item.active ? (
							<li key={item.name}>
								<button
									onClick={() => navigate(item.slug)}
									className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
								>
									{item.name}
								</button>
							</li>
						) : null
					)}

					{authStatus && (
						<li>
							<LogoutButton />
						</li>
          )}
          
				</ul>
			</nav>
		</div>
	);
}
