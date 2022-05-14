import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor() { }

  getAll(){
    return this.notes;
  }

  get(id: number){
    return this.notes[id];
  }

  add(note: Note){
    let newLength = this.notes.push(note as Note);
    let index = newLength-1;
    return index;
  }

  update(id : number, title: string, body: string){
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }
  
  delete(id: number){
    this.notes.splice(id,1);
  }
}
