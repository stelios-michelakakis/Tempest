import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  @Input() color: string = 'red';
  @Input() icon: string = '';
  @Input() text: string ='';


  constructor() { }

  ngOnInit(): void {
  }

}
