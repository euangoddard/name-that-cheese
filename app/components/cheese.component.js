"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var game_service_1 = require('../services/game.service');
var cheese_service_1 = require('../services/cheese.service');
var CheeseComponent = (function () {
    function CheeseComponent(_routeParams, _router, _game, _cheeseService) {
        this._routeParams = _routeParams;
        this._router = _router;
        this._game = _game;
        this._cheeseService = _cheeseService;
        this.hasGuessed = false;
        this.isGuessCorrect = null;
        this.correctAnswer = null;
    }
    CheeseComponent.prototype.ngOnInit = function () {
        this.stage = parseInt(this._routeParams.get('id'), 10);
        this.score = this._game.score;
        if (this._game.is_not_started()) {
            this._router.navigate(['Welcome']);
        }
        else if (this._game.is_over()) {
            this._router.navigate(['End']);
        }
        else if (this._game.stage !== this.stage) {
            this._router.navigate(['Cheese', { id: this._game.stage }]);
        }
        this.cheese_question = this._cheeseService.get(this.stage);
    };
    CheeseComponent.prototype.makeGuess = function (guess) {
        this.hasGuessed = true;
        this.isGuessCorrect = this._cheeseService.guess(this.cheese_question, guess);
        if (this.isGuessCorrect) {
            this.score = this._game.incrementScore();
        }
        this.correctAnswer = this._cheeseService.getAnswer(this.cheese_question);
        this._game.advance();
    };
    CheeseComponent.prototype.moveOnward = function () {
        if (this.hasGuessed) {
            if (this._game.is_over()) {
                this._router.navigate(['End']);
            }
            else {
                this._router.navigate(['Cheese', { id: this._game.stage }]);
            }
        }
    };
    CheeseComponent = __decorate([
        core_1.Component({
            selector: 'cheese-question',
            moduleId: module.id,
            templateUrl: './cheese.component.html',
            styleUrls: [],
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, game_service_1.GameService, cheese_service_1.CheeseService])
    ], CheeseComponent);
    return CheeseComponent;
}());
exports.CheeseComponent = CheeseComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NoZWVzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCw2QkFBMEIsMEJBQTBCLENBQUMsQ0FBQTtBQUNyRCwrQkFBNEMsNEJBQTRCLENBQUMsQ0FBQTtBQVN6RTtJQVFFLHlCQUNVLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixLQUFrQixFQUNsQixjQUE2QjtRQUg3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUVyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBNURIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1NBQzlCLENBQUM7O3VCQUFBO0lBdURGLHNCQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXREWSx1QkFBZSxrQkFzRDNCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY2hlZXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0dhbWVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9nYW1lLnNlcnZpY2UnO1xuaW1wb3J0IHtDaGVlc2VTZXJ2aWNlLCBDaGVlc2VRdWVzdGlvbn0gZnJvbSAnLi4vc2VydmljZXMvY2hlZXNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVlc2UtcXVlc3Rpb24nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlZXNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXSxcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlZXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhZ2U6IG51bWJlcjtcbiAgc2NvcmU6IG51bWJlcjtcbiAgY2hlZXNlX3F1ZXN0aW9uOiBDaGVlc2VRdWVzdGlvbjtcbiAgaGFzR3Vlc3NlZDogYm9vbGVhbjtcbiAgaXNHdWVzc0NvcnJlY3Q6IGJvb2xlYW47XG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfZ2FtZTogR2FtZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY2hlZXNlU2VydmljZTogQ2hlZXNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmhhc0d1ZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzR3Vlc3NDb3JyZWN0ID0gbnVsbDtcbiAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBudWxsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGFnZSA9IHBhcnNlSW50KHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSwgMTApO1xuICAgIHRoaXMuc2NvcmUgPSB0aGlzLl9nYW1lLnNjb3JlO1xuXG4gICAgaWYgKHRoaXMuX2dhbWUuaXNfbm90X3N0YXJ0ZWQoKSkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnV2VsY29tZSddKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2dhbWUuaXNfb3ZlcigpKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydFbmQnXSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9nYW1lLnN0YWdlICE9PSB0aGlzLnN0YWdlKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDaGVlc2UnLCB7aWQ6IHRoaXMuX2dhbWUuc3RhZ2V9XSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVlc2VfcXVlc3Rpb24gPSB0aGlzLl9jaGVlc2VTZXJ2aWNlLmdldCh0aGlzLnN0YWdlKTtcbiAgfVxuXG4gIG1ha2VHdWVzcyhndWVzczogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5oYXNHdWVzc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzR3Vlc3NDb3JyZWN0ID0gdGhpcy5fY2hlZXNlU2VydmljZS5ndWVzcyh0aGlzLmNoZWVzZV9xdWVzdGlvbiwgZ3Vlc3MpO1xuICAgIGlmICh0aGlzLmlzR3Vlc3NDb3JyZWN0KSB7XG4gICAgICB0aGlzLnNjb3JlID0gdGhpcy5fZ2FtZS5pbmNyZW1lbnRTY29yZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSB0aGlzLl9jaGVlc2VTZXJ2aWNlLmdldEFuc3dlcih0aGlzLmNoZWVzZV9xdWVzdGlvbik7XG4gICAgdGhpcy5fZ2FtZS5hZHZhbmNlKCk7XG4gIH1cblxuICBtb3ZlT253YXJkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhc0d1ZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLl9nYW1lLmlzX292ZXIoKSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydFbmQnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDaGVlc2UnLCB7aWQ6IHRoaXMuX2dhbWUuc3RhZ2V9XSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==
