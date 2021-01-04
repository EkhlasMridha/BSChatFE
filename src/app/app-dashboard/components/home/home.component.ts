import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreService } from '@core/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private coreService: CoreService,
    private ref: ViewContainerRef
  ) {
    this.coreService.loadIcons(['like']);
  }

  ngOnInit(): void { }
}
