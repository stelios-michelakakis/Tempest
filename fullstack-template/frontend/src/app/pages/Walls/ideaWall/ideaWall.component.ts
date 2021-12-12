import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-ideaWall',
  templateUrl: './ideaWall.component.html',
  styleUrls: ['./ideaWall.component.scss']
})
export class IdeasComponent implements OnInit {
  id: number;
  type: number;
  content: object;

  constructor() { }

  ngOnInit(): void {
  }

}
