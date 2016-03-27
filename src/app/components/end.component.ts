import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {GameService} from '../services/game.service';

@Component({
  selector: 'cheese-end',
  moduleId: module.id,
  templateUrl: './end.component.html',
  styleUrls: [],
  directives: [CORE_DIRECTIVES]
})
export class EndComponent implements OnInit {
  constructor(private _router: Router, private _game: GameService) {}

  ngOnInit(): void {
      if (!this._game.is_over()) {
          if (this._game.is_in_progress()) {
              this._router.navigate(['Cheese', {id: this._game.stage}]);
          } else {
              this._router.navigate(['Welcome']);
          }
      }
  }

  restart(): void {
    this._game.reset();
    this._router.navigate(['Welcome']);
  }
}
