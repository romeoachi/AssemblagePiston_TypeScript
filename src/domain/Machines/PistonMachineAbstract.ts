import { IPiece } from "../IPiece";
import { InfoProcessPieceView } from "../Views/InfoProcessPieceView";

export abstract class PistonMachineAbstract extends MachineAbstract {
	protected piece: IPiece;
	constructor(durationProcess: number, piece: IPiece) {
		super(durationProcess);
		this.piece = piece;
	}

	getInfoProcessCurrentPiece(): InfoProcessPieceView {
		return new InfoProcessPieceView(this.durationProcess, this.piece);
	}
}
