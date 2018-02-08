import { Component } from '@angular/core';
import {Note} from "./note";
import {NOTES} from "./mock-note";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = NOTES;
  title = 'Notes Angular App';
}