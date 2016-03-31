export class GameService {
    static MAX_STAGE: number = 10;
    private _stage: number;
    private _score: number;

    constructor() {
        this._stage = 0;
        this._score = 0;
    }

    advance(): number {
        this._stage += 1;
        return this._stage;
    }

    incrementScore(): number {
        this._score += 1;
        return this._score;
    }

    get stage(): number {
        return this._stage;
    }

    get score(): number {
        return this._score;
    }

    reset(): void {
        this._stage = 0;
        this._score = 0;
    }

    is_in_progress(): boolean {
        return 0 < this._stage && this._stage <= GameService.MAX_STAGE;
    }

    is_not_started(): boolean {
        return this._stage === 0;
    }

    is_over(): boolean {
        return GameService.MAX_STAGE < this._stage;
    }
}
