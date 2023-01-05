import { IPiece } from "../IPiece";
import { PistonMachineAbstract } from "./PistonMachineAbstract";

export class PistonMachineMA extends PistonMachineAbstract {
	private static DURATION_PROCESS = 2.5;
	private constructor(durationProcess: number, piece: IPiece) {
		super(durationProcess, piece);
	}

	static setPiece(piece: IPiece): PistonMachineMA {
		return new PistonMachineMA(this.DURATION_PROCESS, piece);
	}
}
