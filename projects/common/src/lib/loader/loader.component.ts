import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'job-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
 @Input() src!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
