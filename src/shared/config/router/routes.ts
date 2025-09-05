export const ROUTE_PATH = {
	MAIN: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	SERVICES: '/services',
	SERVICE_ID: '/services/:serviceId',
	ACCOUNTS: '/services/:serviceId/accounts',
	ACCOUNT_ID: '/services/:serviceId/accounts/:accountId',
	NOT_FOUND: '/404',
	ALL: '*',
} as const;
