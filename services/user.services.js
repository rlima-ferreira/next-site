import 'isomorphic-fetch';

export const login = async (data) => {
	const res = await fetch({
		url: process.env.API,
		body: data,
	});
	const user = await res.json();
	return user;
};

export const signup = async (data) => {
	const res = await fetch({
		url: process.env.API,
		body: data,
	});
	const user = await res.json();
	return user;
};

export const updateUser = async (data) => {
	const res = await fetch({
		url: process.env.API,
		body: data,
	});
	const user = await res.json();
	return user;
};

export const findUsers = async () => {
	const res = await fetch({
		url: process.env.API,
	});
	const users = await res.json();
	return users;
};

export const findUser = async (data) => {
	const res = await fetch({
		url: process.env.API,
		body: data,
	});
	const user = await res.json();
	return user;
};

export const deleteUser = async (data) => {
	const res = await fetch({
		url: process.env.API,
		body: data,
	});
	const user = await res.json();
	return user;
};
