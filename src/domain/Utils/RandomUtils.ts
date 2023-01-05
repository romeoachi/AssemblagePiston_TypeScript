class RandomUtils {
	private static MIN_CHANCE = 0;
	private static MAX_CHANGE = 3;

	private static MIN_TIME_REPARATION = 5;
	private static MAX_TIME_REPARATION = 10;

	static isMachineDown(): boolean {
		return Math.floor(Math.random() * this.MAX_CHANGE) + this.MIN_CHANCE == 0;
	}

	static getExtraTimeDurationTrouble(isMachineDown: boolean): number {
		if (isMachineDown)
			return (
				Math.floor(Math.random() * this.MAX_TIME_REPARATION) +
				this.MIN_TIME_REPARATION
			);
		return 0;
	}
}
