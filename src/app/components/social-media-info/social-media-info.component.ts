import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-info',
  templateUrl: './social-media-info.component.html',
  styleUrls: ['./social-media-info.component.css']
})
export class SocialMediaInfoComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }

}
