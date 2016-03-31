import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {GameService} from '../services/game.service';

@Component({
  selector: 'cheese-welcome',
  moduleId: module.id,
  templateUrl: './welcome.component.html',
  styleUrls: [],
  directives: [CORE_DIRECTIVES]
})
export class WelcomeComponent {
  constructor(private _router: Router, private _game: GameService) {
    this._game.reset();
  }

  start(): void {
    this._game.advance();
    this._router.navigate(['Cheese', {id: this._game.stage}]);
  }
}
