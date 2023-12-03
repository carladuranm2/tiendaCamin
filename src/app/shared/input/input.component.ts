import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {
  @Input() iconName: string = 'arrow-forward';
  @Input() email: string = '';
  @Input() textInput: string = '';
  constructor() { }

  ngOnInit() {}

}
