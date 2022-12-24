import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NoteDetailComponent,
    ListNotesComponent,
    // LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
