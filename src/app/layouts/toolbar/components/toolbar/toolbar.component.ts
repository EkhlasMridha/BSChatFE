import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '@core/servcies/icon.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuButton: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();
  constructor (
    private iconService: IconService
  ) {
    this.iconService.loadIcons(['signout']);
  }

  ngOnInit(): void { }

  signoutUser() {

  }

  openDrawer(event) {
    this.menuButton.emit(event);
  }

}
