import { IPiece } from "../IPiece";
import { PistonMachineAbstract } from "./PistonMachineAbstract";

export class PistonMachineMJ extends PistonMachineAbstract {
	private static DURATION_PROCESS = 3;
	private constructor(durationProcess: number, piece: IPiece) {
		super(durationProcess, piece);
	}

	static setPiece(piece: IPiece): PistonMachineMJ {
		return new PistonMachineMJ(this.DURATION_PROCESS, piece);
	}
}
