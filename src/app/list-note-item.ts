export class ListNoteItem {
  public Id: string;
  public Title: string;
  public Note: string;

  constructor(id: string, title: string, note: string) {
    this.Id = id;
    this.Title = title;
    this.Note = note;
  }
}
