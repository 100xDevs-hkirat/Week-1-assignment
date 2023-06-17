let count = 1;

const printCount = () => {
	setTimeout(() => {
		console.log(count);
		count += 1;
        printCount()
	}, 1000);
};

printCount()
