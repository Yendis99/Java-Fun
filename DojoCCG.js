class Card{
	constructor(name, cost){
		this.name=name;
		this.cost=cost;

	}
}


class Unit extends Card{
	constructor(name, cost, power, res){
		super(name, cost);
		this.power = power;
		this.res = res;
	}
	comboStat(effect){
		if(effect == heff1){
			this.res+=3;
		}
		if(effect == ueff2){
			this.res-=2;
		}
		if(effect == peff3){
			this.power+=2;
		}

	}
	attack(target){
		target.res -= this.power;


	}
}

class Effect extends Card{
	constructor(name, cost, text, stat){
	super(name, cost);
		this.text = text;
		this.stat = stat;
	}
	

}

const rnin1 = new Unit("RedBeltNinja", 3, 3, 4);
const bnin2 = new Unit("BlackBeltNinja", 4, 5, 4);	
const heff1 = new Effect("HardAlgo", 2, "increase target resilience by 3", 3)
const ueff2 = new Effect("Unhandled Promise Rejection", 1, "reduce target resilienc by 2", -3);
const peff3 = new Effect("Pair Programming", 3, "increase target power by 2", 2);	
	console.log(rnin1);
	console.log(bnin2);
	console.log(heff1);
	console.log(ueff2);
	console.log(peff3);


//Play Dojo CCG scenerio
	console.log("Player1 plays the Red Belt Ninja card:")
	console.log(rnin1);
	console.log("player1 plays the Hard Algorithm card on the Red Belt Ninja card:")
	console.log(heff1);
		const rstat = rnin1.comboStat(heff1);
		console.log(rnin1);
	console.log("Player2 plays the Black Belt Ninja card:")
	console.log(bnin2);
	console.log("player2 plays the Unhandled Promise Rejection card on the Red Belt Ninja card:")
		const rstat2 = rnin1.comboStat(ueff2);
		console.log(rnin1);
	console.log("player2 attacks the Red Belt Ninja card with the Black Belt Ninja card:")
		const bstat1 = bnin2.attack(rnin1);
		const bstat2 = bnin2.attack(rnin1);
		const bstat3 = bnin2.attack(rnin1);
		console.log(rnin1);