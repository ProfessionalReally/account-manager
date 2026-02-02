import { ROUTE_PATH } from '@shared/config/router/routes';
import { ProtectedRoute } from '@shared/lib/router/protected-route';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const ServicesPage = lazy(() => import('@app/app-modules/services'));

const AccountsPage = lazy(() => import('@app/app-modules/accounts'));

const AccountPage = lazy(() => import('@app/app-modules/account'));

const LoginPage = lazy(() => import('@app/app-modules/login'));

const RegisterPage = lazy(() => import('@app/app-modules/register'));

const ErrorLayout = lazy(() => import('@app/app-modules/error'));

export function AppRoutes() {
	return (
		<Suspense fallback={<FullscreenLoader />}>
			<Routes>
				<Route
					element={<Navigate replace to={ROUTE_PATH.SERVICES} />}
					path={ROUTE_PATH.MAIN}
				/>
				<Route
					element={
						<ProtectedRoute>
							<ServicesPage />
						</ProtectedRoute>
					}
					path={ROUTE_PATH.SERVICES}
				/>
				<Route
					element={
						<ProtectedRoute>
							<AccountsPage />
						</ProtectedRoute>
					}
					path={ROUTE_PATH.ACCOUNTS}
				/>
				<Route
					element={
						<ProtectedRoute>
							<AccountPage />
						</ProtectedRoute>
					}
					path={ROUTE_PATH.ACCOUNT_ID}
				/>
				<Route element={<LoginPage />} path={ROUTE_PATH.LOGIN} />
				<Route element={<RegisterPage />} path={ROUTE_PATH.REGISTER} />
				<Route element={<ErrorLayout />} path={ROUTE_PATH.NOT_FOUND} />
				<Route element={<ErrorLayout />} path={ROUTE_PATH.ALL} />
			</Routes>
		</Suspense>
	);
}
