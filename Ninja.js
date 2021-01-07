class Ninja{
	constructor(name){
		this.name=name;
		this.health=0;
		this.speed=3;
		this.strength=3;

	}
	sayName(){
		return this.name;

	}
	showStats(){
		return this;
	}

	drinkSake(){
		this.health+=10;
		return `your health has has increase to ${this.health}`;

	}
}

const nin1 = new Ninja("Hyuki");
	console.log(nin1);
	const nm = nin1.sayName();
	console.log(nm);
	const ss = nin1.showStats();
	console.log(ss);
	const lc = nin1.drinkSake();
	const lc2 = nin1.drinkSake();
	const lc3 = nin1.drinkSake();
	const lc4 = nin1.drinkSake();
	console.log(lc4);


// class Sensei extends Ninja {
// 	constructor(name){
// 		super(name, "health", "speed", "Strength");
// 		this.wisdom = 10;
// 		this.health+=200;
// 		this.speed+=7;
// 		this.strength+=7;
// 	}
// 	speakWisdom(){
// 		super.drinkSake();
// 		return `Your have not only increased your wisdom to ${this.wisdom},
// 		you have also enbibed in a good drink.... 
// 		and as you know good sake increases you health. Your healh
// 		is now ${this.health}`; 
// 	}

// }

// const Sen1 = new Sensei("Shanobi");
// 	console.log(Sen1);
// 	const gs = Sen1.speakWisdom();
// 	const gs2 = Sen1.speakWisdom();
// 	const gs3 = Sen1.speakWisdom();
// 	console.log(gs3);

