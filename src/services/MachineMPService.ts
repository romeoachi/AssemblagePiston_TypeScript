import { InfoProcessPieceView } from "../domain/Views/InfoProcessPieceView";
import { Piston } from "../domain/Piston";
import { IPiece } from "../domain/IPiece";
import { PieceFabrique } from "../domain/fabrique/PieceFabrique";
import { PistonMT } from "../domain/PistonMT";
import { PistonMJ } from "../domain/PistonMJ";
import { PistonMA } from "../domain/PistonMA";

export class MachineMPService {
	private readonly DURATION_PROCESS: number = 1;

	private pistons: Piston[];

	private pistonMAS: InfoProcessPieceView[] = [];
	private pistonMTS: InfoProcessPieceView[] = [];
	private pistonMJS: InfoProcessPieceView[] = [];

	private constructor(pieces: IPiece[]) {
		this.pistons = [];
		this.filterPieceAndMakePiecesProcess(pieces);
		this.filterAndMergePistonPieces();
	}

	static setPiecesPiston(pieces: IPiece[]): MachineMPService {
		return new MachineMPService(pieces);
	}

	getTotalDurationProcess(): number {
		return this.pistons
			.map((p) => p.getDurationProcess())
			.reduce((accumalotor, value) => {
				return accumalotor + value;
			}, 0);
	}

	private filterPieceAndMakePiecesProcess(pieces: IPiece[]) {
		this.pistonMTS = pieces
			.filter((p) => p.getEnumTypePiece() == EnumTypePiece.MT)
			.map((ipiece) => PieceFabrique.make(ipiece));

		this.pistonMJS = pieces
			.filter((p) => p.getEnumTypePiece() == EnumTypePiece.MJ)
			.map((ipiece) => PieceFabrique.make(ipiece));

		this.pistonMAS = pieces
			.filter((p) => p.getEnumTypePiece() == EnumTypePiece.MA)
			.map((ipiece) => PieceFabrique.make(ipiece));
	}

	private filterAndMergePistonPieces() {
		while (
			this.pistonMTS.length > 0 &&
			this.pistonMJS.length > 0 &&
			this.pistonMAS.length > 0
		) {
			var currentPistonMT = this.pistonMTS.shift();
			var currentPistonMJ = this.pistonMJS.shift();
			var currentPistonMA = this.pistonMAS.shift();
			var durationOfAssemblage = 0;

			if (
				currentPistonMT == undefined ||
				currentPistonMJ == undefined ||
				currentPistonMA == undefined
			) {
				break;
			}

			this.pistons.push(
				this.assembledPiston(
					currentPistonMT.getPiece() as PistonMT,
					currentPistonMJ.getPiece() as PistonMJ,
					currentPistonMA.getPiece() as PistonMA,
					(durationOfAssemblage =
						this.getMaxDurationCurrentProcessMergePistonItems(
							currentPistonMT,
							currentPistonMJ,
							currentPistonMA
						) + this.getCurrentDurationMachineMPByProcess())
				)
			);
		}
	}

	private assembledPiston(
		pistonMT: PistonMT,
		pistonMJ: PistonMJ,
		pistonMA: PistonMA,
		durationOfAssemblage: number
	): Piston {
		return Piston.set(pistonMT, pistonMJ, pistonMA, durationOfAssemblage);
	}

	private getMaxDurationCurrentProcessMergePistonItems(
		currentPistonMT: InfoProcessPieceView,
		currentPistonMJ: InfoProcessPieceView,
		currentPistonMA: InfoProcessPieceView
	): number {
		let durationsOfCurrentAssemblageArray = [
			currentPistonMT.getDurationProcess(),
			currentPistonMJ.getDurationProcess(),
			currentPistonMA.getDurationProcess(),
		];
		return Math.max(...durationsOfCurrentAssemblageArray);
	}

	private getCurrentDurationMachineMPByProcess(): number {
		return (
			RandomUtils.getExtraTimeDurationTrouble(RandomUtils.isMachineDown()) +
			this.DURATION_PROCESS
		);
	}
}
