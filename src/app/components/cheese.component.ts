import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {GameService} from '../services/game.service';
import {CheeseService, CheeseQuestion} from '../services/cheese.service';

@Component({
  selector: 'cheese-question',
  moduleId: module.id,
  templateUrl: './cheese.component.html',
  styleUrls: [],
  directives: [CORE_DIRECTIVES]
})
export class CheeseComponent implements OnInit {
  stage: number;
  score: number;
  cheese_question: CheeseQuestion;
  hasGuessed: boolean;
  isGuessCorrect: boolean;
  correctAnswer: string;

  constructor(
    private _routeParams: RouteParams,
    private _router: Router,
    private _game: GameService,
    private _cheeseService: CheeseService
  ) {
    this.hasGuessed = false;
    this.isGuessCorrect = null;
    this.correctAnswer = null;
  }

  ngOnInit() {
    this.stage = parseInt(this._routeParams.get('id'), 10);
    this.score = this._game.score;

    if (this._game.is_not_started()) {
      this._router.navigate(['Welcome']);
    } else if (this._game.is_over()) {
      this._router.navigate(['End']);
    } else if (this._game.stage !== this.stage) {
      this._router.navigate(['Cheese', {id: this._game.stage}]);
    }

    this.cheese_question = this._cheeseService.get(this.stage);
  }

  makeGuess(guess: string): void {
    this.hasGuessed = true;
    this.isGuessCorrect = this._cheeseService.guess(this.cheese_question, guess);
    if (this.isGuessCorrect) {
      this.score = this._game.incrementScore();
    }
    this.correctAnswer = this._cheeseService.getAnswer(this.cheese_question);
    this._game.advance();
  }

  moveOnward(): void {
    if (this.hasGuessed) {
      if (this._game.is_over()) {
        this._router.navigate(['End']);
      } else {
        this._router.navigate(['Cheese', {id: this._game.stage}]);
      }
    }

  }
}
