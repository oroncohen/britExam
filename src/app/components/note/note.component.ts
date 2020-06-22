import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NoteService} from '../../services/note.service';
import {Note} from '../../model/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteForm: FormGroup;
  @Input() date;
  @Input() mode;
  @Input() message;
  @Input() author;
  @Input() id;
  @Output() delete = new EventEmitter<any>();


  constructor(private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private noteService: NoteService) {
    this.createForm();
  }

  ngOnInit(): void {
  }



  private createForm() {
    this.noteForm = this.formBuilder.group({
      author: ['', Validators.required],
      message: ['', Validators.required]
    });
  }





  deleteClicked(id: any) {
    this.delete.emit(id);
  }

  open(content, id) {
    const modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic', backdrop: 'static'});
    if (id) {
      const noteData: Note = this.noteService.getNoteById(id);
      this.noteForm.patchValue({
        author: noteData.author,
        message: noteData.message
      });
    }
  }


  submitForm() {
    const n = this.noteForm.value;
    // this.noteForm.reset();
    if (this.id) {
      this.noteService.editNoteById(this.id, n);
    } else {
      const notesQuantity = this.noteService.getAllNotes().length;
      const id = notesQuantity + 1;
      this.noteService.addNote(new Note(
        id,
        n.message,
        n.author,
        new Date()));
    }
    this.noteForm.reset();
    this.modalService.dismissAll('closed');
  }




}
