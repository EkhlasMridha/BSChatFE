import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerService } from 'src/app/shared-services/user-manager.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuButton: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();
  constructor(
    private userManagerService: UserManagerService,
    private router: Router,
    private iconService: IconService
  ) {
    this.iconService.loadIcons(['signout']);
  }

  ngOnInit(): void {}

  signoutUser() {
    this.userManagerService.signout().subscribe((res) => {
      this.router.navigate(['signin']);
    });
  }

  openDrawer(event) {
    this.menuButton.emit(event);
  }

}
