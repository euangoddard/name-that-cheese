"use strict";
var GameService = (function () {
    function GameService() {
        this._stage = 0;
        this._score = 0;
    }
    GameService.prototype.advance = function () {
        this._stage += 1;
        return this._stage;
    };
    GameService.prototype.incrementScore = function () {
        this._score += 1;
        return this._score;
    };
    Object.defineProperty(GameService.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameService.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.reset = function () {
        this._stage = 0;
        this._score = 0;
    };
    GameService.prototype.is_in_progress = function () {
        return 0 < this._stage && this._stage <= GameService.MAX_STAGE;
    };
    GameService.prototype.is_not_started = function () {
        return this._stage === 0;
    };
    GameService.prototype.is_over = function () {
        return GameService.MAX_STAGE < this._stage;
    };
    GameService.MAX_STAGE = 10;
    return GameService;
}());
exports.GameService = GameService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBS0k7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELHNCQUFJLDhCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9DLENBQUM7SUExQ00scUJBQVMsR0FBVyxFQUFFLENBQUM7SUEyQ2xDLGtCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSxtQkFBVyxjQTRDdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvZ2FtZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdhbWVTZXJ2aWNlIHtcbiAgICBzdGF0aWMgTUFYX1NUQUdFOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIF9zdGFnZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UgPSAwO1xuICAgICAgICB0aGlzLl9zY29yZSA9IDA7XG4gICAgfVxuXG4gICAgYWR2YW5jZSgpOiBudW1iZXIge1xuICAgICAgICB0aGlzLl9zdGFnZSArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50U2NvcmUoKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy5fc2NvcmUgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xuICAgIH1cblxuICAgIGdldCBzdGFnZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XG4gICAgfVxuXG4gICAgZ2V0IHNjb3JlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZTtcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UgPSAwO1xuICAgICAgICB0aGlzLl9zY29yZSA9IDA7XG4gICAgfVxuXG4gICAgaXNfaW5fcHJvZ3Jlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAwIDwgdGhpcy5fc3RhZ2UgJiYgdGhpcy5fc3RhZ2UgPD0gR2FtZVNlcnZpY2UuTUFYX1NUQUdFO1xuICAgIH1cblxuICAgIGlzX25vdF9zdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2UgPT09IDA7XG4gICAgfVxuXG4gICAgaXNfb3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEdhbWVTZXJ2aWNlLk1BWF9TVEFHRSA8IHRoaXMuX3N0YWdlO1xuICAgIH1cbn1cbiJdfQ==
