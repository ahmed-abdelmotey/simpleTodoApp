import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { trigger, state, animate, transition, style} from '@angular/animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
