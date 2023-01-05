import { IPiece } from "./IPiece";

export class PistonMT implements IPiece {
	getEnumTypePiece(): EnumTypePiece {
		return EnumTypePiece.MT;
	}
}
