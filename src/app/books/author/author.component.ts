import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  @Input() author: string = '';
  @Output() backgroundChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeBackground() {
    const colors = ['red', 'green', 'blue', 'yellow', 'black', 'aqua'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.backgroundChange.emit(color);
  }
}
