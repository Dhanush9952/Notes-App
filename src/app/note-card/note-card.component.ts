import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})

export class NoteCardComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator')
  truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText')
  bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {  }

  ngOnInit() {

    // let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    // let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    // if(this.bodyText?.nativeElement.scrollHeight > viewableHeight){
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    // }
    // else{
    //   this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    // }
  }
  onDeleteClick(){
    this.deleteEvent.emit();
  }


}
