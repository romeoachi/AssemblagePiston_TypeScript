import { IPiece } from "../IPiece";
import { InfoProcessPieceView } from "../Views/InfoProcessPieceView";
import { PistonMachineMT } from "../Machines/PistonMachineMT";
import { PistonMachineMJ } from "../Machines/PistonMachineMJ";
import { PistonMachineMA } from "../Machines/PistonMachineMA";

export class PieceFabrique {
	private constructor() {}

	static make(piece: IPiece): InfoProcessPieceView {
		switch (piece.getEnumTypePiece()) {
			case EnumTypePiece.MT:
				return PistonMachineMT.setPiece(piece).getInfoProcessCurrentPiece();
			case EnumTypePiece.MJ:
				return PistonMachineMJ.setPiece(piece).getInfoProcessCurrentPiece();
			case EnumTypePiece.MA:
				return PistonMachineMA.setPiece(piece).getInfoProcessCurrentPiece();
			default:
				throw new Error("Piece not supported!");
		}
	}
}
