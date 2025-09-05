import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { ServicesLayout } from '@pages/services/services-layout/services-layout.tsx';

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path={ROUTE_PATH.MAIN}
				element={<Navigate to={ROUTE_PATH.SERVICES} replace />}
			/>
			<Route path={ROUTE_PATH.SERVICES} element={<ServicesLayout />} />
			<Route
				path={ROUTE_PATH.SERVICE_ID}
				element={<div>Page Service</div>}
			/>
			<Route
				path={ROUTE_PATH.ACCOUNTS}
				element={<div>Page Accounts List</div>}
			/>
			<Route
				path={ROUTE_PATH.ACCOUNT_ID}
				element={<div>Page Account</div>}
			/>

			<Route path={ROUTE_PATH.LOGIN} element={<div>Page Login</div>} />
			<Route
				path={ROUTE_PATH.REGISTER}
				element={<div>Page Register</div>}
			/>
			<Route path={ROUTE_PATH.NOT_FOUND} element={<div>Page 404</div>} />
			<Route path={ROUTE_PATH.ALL} element={<div>Page 404</div>} />
		</Routes>
	);
}
