import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.css']
})
export class StatusBadgeComponent implements OnInit {

  @Input() status: number;

  constructor() { }

  ngOnInit() {
  }

}
