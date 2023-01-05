import { PistonMachineAbstract } from "./PistonMachineAbstract";
import { IPiece } from "../IPiece";

export class PistonMachineMT extends PistonMachineAbstract {
	private static DURATION_PROCESS = 2;
	private constructor(durationProcess: number, piece: IPiece) {
		super(durationProcess, piece);
	}

	static setPiece(piece: IPiece): PistonMachineMT {
		return new PistonMachineMT(this.DURATION_PROCESS, piece);
	}
}
