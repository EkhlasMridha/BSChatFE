import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '@core/core.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor (
    private coreService: CoreService,
    private router: Router
  ) {
    this.coreService.loadIcons(['signout']);
  }

  ngOnInit(): void { }

  signoutUser() {
    this.coreService.removeToken();
    this.router.navigate(['']);
  }

}
