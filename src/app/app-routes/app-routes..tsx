import { ServicesLayout } from '@pages/services/services-layout/services-layout.tsx';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
	return (
		<Routes>
			<Route
				element={<Navigate replace to={ROUTE_PATH.SERVICES} />}
				path={ROUTE_PATH.MAIN}
			/>
			<Route element={<ServicesLayout />} path={ROUTE_PATH.SERVICES} />
			<Route
				element={<div>Page Service</div>}
				path={ROUTE_PATH.SERVICE_ID}
			/>
			<Route
				element={<div>Page Accounts List</div>}
				path={ROUTE_PATH.ACCOUNTS}
			/>
			<Route
				element={<div>Page Account</div>}
				path={ROUTE_PATH.ACCOUNT_ID}
			/>

			<Route element={<div>Page Login</div>} path={ROUTE_PATH.LOGIN} />
			<Route
				element={<div>Page Register</div>}
				path={ROUTE_PATH.REGISTER}
			/>
			<Route element={<div>Page 404</div>} path={ROUTE_PATH.NOT_FOUND} />
			<Route element={<div>Page 404</div>} path={ROUTE_PATH.ALL} />
		</Routes>
	);
}
