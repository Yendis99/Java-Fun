function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


const fiveHeads = new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
	let count = 0;
    while(headsCount < 5) {
        attempts++;
		if(attempts > 100){
			console.log(count);
			count = 0;
			attempts=0;
			headsCount = 0;
			reject("We have flipped 100 times...sorry");
			exit;
			
		}
        let result = tossCoin();
        console.log(`${result} was flipped`);
		count++;
        if(result === "heads") {
            headsCount++;
		} else {
		    headsCount = 0;
        }
    }
	console.log(count);
	count = 0;
    resolve(`It took ${attempts} tries to flip five "heads"`);
});
fiveHeads
	.then(res => console.log(res))
	.catch(err => console.log(err));
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );