const changeName = (name: string): string => {
	if (window.innerWidth <= 1000) {
		const arr = name.split(' ');

		let res = arr[0];

		arr.slice(1).forEach(name => {
			res += ` ${name[0]}.`;
		});

		return res;
	}

	return name;
};

export default changeName;
