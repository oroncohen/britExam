import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

import {NoteService} from '../../../services/note.service';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(public noteService: NoteService) {
  }

  ngOnInit(): void {
  }

  delete(id) {
    this.noteService.deleteNoteById(id);
  }

  get notes() {
    const notes = this.noteService.getAllNotes();
    const filteredNotes = _.sortBy(notes, 'date');
    return filteredNotes;
  }
}
