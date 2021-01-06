import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@contract/user.model';
import { CoreService } from '@core/core.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  user: UserModel;
  constructor (
    private coreService: CoreService,
    private router: Router,
    private userService: UserService
  ) {
    this.coreService.loadIcons(['signout']);
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  signoutUser() {
    this.coreService.removeToken();
    this.router.navigate(['signin']);
  }

  getUserProfile() {
    this.userService.getUserProfile().subscribe(res => {
      this.user = res;
    });
  }
}
