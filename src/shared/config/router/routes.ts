export const ROUTE_PATH = {
	ACCOUNT_ID: '/services/:serviceId/accounts/:accountId',
	ACCOUNTS: '/services/:serviceId/accounts',
	ALL: '*',
	LOGIN: '/login',
	MAIN: '/',
	NOT_FOUND: '/404',
	REGISTER: '/register',
	SERVICES: '/services',
} as const;
