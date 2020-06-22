import {Injectable} from '@angular/core';
import {Note} from '../model/Note';
import {StorageMap} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public notes: Note[] = [];

  constructor(private storage: StorageMap) {
    this.storage.get('notes').subscribe((res: Note[]) => {
      if (res.length) {
        this.notes = res;
      }
    });
  }

  // Storage setter
  updateStorage(data) {
    this.storage.set('notes', data).subscribe(() => {
      return true;
    });
  }

  getAllNotes() {
    return this.notes;
  }

  addNote(note: Note): NoteService {
    if (note) {
      this.notes.push(new Note(note.id, note.message, note.author, note.date));
      this.updateStorage(this.notes);
      return this;
    }
  }

  getNoteById(id) {
    return this.notes
      .filter(note => note.id === id)[0];
  }

  editNoteById(id, data) {
    const objIndex = this.notes.findIndex((obj => obj.id === id));
    this.notes[objIndex].message = data.message;
    this.updateStorage(this.notes);

  }

  deleteNoteById(id: number): NoteService {
    this.notes = this.notes
      .filter(note => note.id !== id);
    this.updateStorage(this.notes);
    return this;
  }

}
