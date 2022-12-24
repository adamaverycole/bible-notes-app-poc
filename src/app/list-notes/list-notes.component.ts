import { Component, OnInit } from '@angular/core';
import { ListNoteItem } from '../list-note-item';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  public localStorageService: LocalStorageService;
  public Notes: Map<string, ListNoteItem>;
  public SelectedNote: ListNoteItem;

  constructor() {
    this.localStorageService = new LocalStorageService();
    this.getNotesFromStorage();
    this.saveNotesToStorage();

    // this.Notes.push(note);
    // if (this.Notes === null) {
    //   let note = new ListNoteItem();
    //   note.Id = 'note-1';
    //   note.Title = 'Note 1';
    //   note.Note = 'abc';
    //   this.Notes.push(note);
    // }
  }

  ngOnInit() {}

  onSelect(note: ListNoteItem): void {
    this.SelectedNote = note;
  }

  getNotesFromStorage() {
    this.Notes = JSON.parse(this.localStorageService.get('notes'));
    if (this.Notes === null) {
      this.Notes = new Map<string, ListNoteItem>();
      let note = new ListNoteItem('note-1', 'Note 1', 'abc');
      this.Notes.set(note.Id, note);
    }
  }

  saveNotesToStorage() {
    this.localStorageService.set('notes', JSON.stringify(this.Notes));
  }
}
