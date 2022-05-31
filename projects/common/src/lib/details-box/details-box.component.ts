import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-details-box',
  templateUrl: './details-box.component.html',
  styleUrls: ['./details-box.component.scss'],
})
export class DetailsBoxComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  @Input() items!: string[];

  constructor() {}

  ngOnInit(): void {}
}
