function getCurrentYear() {
	const date = new Date();
	return dat.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
	return {
		[`income-${getCurrentYear()}`] = income;
		[`gdp-${getCurrentYear()}`] = gdp;
		[`capita-${getCurrentYear()}`] = capita;
	};
}
