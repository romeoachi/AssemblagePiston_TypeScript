import { PistonMA } from "./PistonMA";
import { PistonMJ } from "./PistonMJ";
import { PistonMT } from "./PistonMT";

export class Piston {
	private pistonMT: PistonMT;
	private pistonMJ: PistonMJ;
	private pistonMA: PistonMA;
	private durationProcess: number;

	private constructor(
		pistonMT: PistonMT,
		pistonMJ: PistonMJ,
		pistonMA: PistonMA,
		duratationProcess: number
	) {
		this.pistonMT = pistonMT;
		this.pistonMJ = pistonMJ;
		this.pistonMA = pistonMA;
		this.durationProcess = duratationProcess;
	}

	static set(
		pistonMT: PistonMT,
		pistonMJ: PistonMJ,
		pistonMA: PistonMA,
		totalDurationProcessItem: number
	): Piston {
		return new Piston(pistonMT, pistonMJ, pistonMA, totalDurationProcessItem);
	}

	getDurationProcess(): number {
		return this.durationProcess;
	}
}
