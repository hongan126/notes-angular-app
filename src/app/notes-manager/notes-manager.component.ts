import {Component, OnInit, ViewChildren, ViewEncapsulation} from '@angular/core';
import {Note} from "../note";
import {NOTES} from "../mock-note";

@Component({
  selector: 'app-notes-manager',
  templateUrl: './notes-manager.component.html',
  styleUrls: ['./notes-manager.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesManagerComponent implements OnInit {
  notes = NOTES;
  selectedNote: Note;
  id: number;

  constructor() {
  }

  ngOnInit() {

  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  addItem(): void {
    this.id = this.notes.length + 1;
    this.notes.unshift({id: this.id, title: "New note", noteContent: ''} as Note);
    this.selectedNote = this.notes[0];
  }

  deleteItem(note: Note): void {
    this.notes = this.notes.filter(n => n != note);
    this.selectedNote = null;
  }

  updateNoteTitle(): void {
    if (this.selectedNote.noteContent.startsWith("\n")) {
      this.selectedNote.noteContent = '';
      return;
    }
    var strings = this.selectedNote.noteContent.split("\n");
    this.selectedNote.title = strings[0];
    if (this.selectedNote.title.length > 25) {
      this.selectedNote.title = this.selectedNote.title.substring(0, 25) + "...";
    }
    // this.selectedNote.title = this.selectedNote.noteContent.substring(0, 18) + "...";
  }

  // onKey(event: any) { // without type info
  //   // do something with event param
  //   console.log(event);
  // }
}
