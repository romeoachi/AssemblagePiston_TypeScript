abstract class MachineAbstract {
	protected durationProcess: number;
	protected constructor(duration: number) {
		this.durationProcess =
			duration + this.getDurationExtraTimeIfMachineIsDown();
	}

	getDurationExtraTimeIfMachineIsDown(): number {
		return RandomUtils.getExtraTimeDurationTrouble(RandomUtils.isMachineDown());
	}
}
