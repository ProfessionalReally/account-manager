import { useCurrentUser } from '@entities/user';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { data: user, isLoading, isError } = useCurrentUser();

	if (isLoading) {
		return <FullscreenLoader />;
	}

	if (isError || !user?.data) {
		return <Navigate to={ROUTE_PATH.LOGIN} replace />;
	}

	return children;
};
