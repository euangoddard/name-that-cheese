import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {GameService} from '../services/game.service';
import {WelcomeComponent} from './welcome.component';
import {CheeseComponent} from './cheese.component';
import {EndComponent} from './end.component';
import {CheeseService} from '../services/cheese.service';

@Component({
  selector: 'cheese-app',
  viewProviders: [GameService, CheeseService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/cheeses/:id', name: 'Cheese', component: CheeseComponent },
  { path: '/end', name: 'End', component: EndComponent }
])
export class AppComponent {}
