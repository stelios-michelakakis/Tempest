import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  id: number;
  type: number;
  content: object;

  constructor() { }

  ngOnInit(): void {
  }

}
