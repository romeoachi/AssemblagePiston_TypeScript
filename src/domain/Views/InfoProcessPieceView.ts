import { IPiece } from "../IPiece";

export class InfoProcessPieceView {
	durationProcess: number;
	piece: IPiece;
	constructor(durationProcess: number, piece: IPiece) {
		this.durationProcess = durationProcess;
		this.piece = piece;
	}

	getPiece(): IPiece {
		return this.piece;
	}

	getDurationProcess(): number {
		return this.durationProcess;
	}
}
