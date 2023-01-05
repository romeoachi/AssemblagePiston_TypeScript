import { IPiece } from "./domain/IPiece";
import { PistonMA } from "./domain/PistonMA";
import { PistonMJ } from "./domain/PistonMJ";
import { PistonMT } from "./domain/PistonMT";
import { MachineMPService } from "./services/MachineMPService";

const COUNT_OF_EACH_PIECES: number = 100;
let pieces: IPiece[] = [];

let compteur = 0;

while (compteur < COUNT_OF_EACH_PIECES) {
	let currentArray = [new PistonMT(), new PistonMA(), new PistonMJ()];
	pieces.push(...currentArray);
	compteur++;
}

let machineMP = MachineMPService.setPiecesPiston(pieces);
console.log(machineMP.getTotalDurationProcess());
