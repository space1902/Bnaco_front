import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public state = true;
  constructor() { }

  ngOnInit(): void {
  }

}
