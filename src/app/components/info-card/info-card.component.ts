import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() mainText: string;
  @Input() icon: string;
  @Input() iconVal: string;
  @Input() final: string;
  @Input() finalVal: string;

  constructor() { }

  ngOnInit() {
    console.log(this.mainText);
  }

}
