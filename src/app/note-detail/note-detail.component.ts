import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ListNoteItem } from '../list-note-item';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent implements OnInit, OnChanges {
  @Input() Note?: ListNoteItem;
  // @Input('Note') Note$: Observable<ListNoteItem>;
  // protected inputSubject = new Subject<ListNoteItem>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // this.inputSubject.observed
  }
}
