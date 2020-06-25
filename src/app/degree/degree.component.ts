import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() public degree;

}
