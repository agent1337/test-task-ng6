import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('backgroundEl')
  backgroundEl: ElementRef;

  @Output() OnClose: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    if (this.backgroundEl) {
      this.backgroundEl.nativeElement.addEventListener('click', () => {
        this.close();
      });
    }
  }

  close(): void {
    this.OnClose.emit();
  }

  constructor() { }
}
