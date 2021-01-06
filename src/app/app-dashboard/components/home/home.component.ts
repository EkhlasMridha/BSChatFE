import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreService } from '@core/core.service';
import { SignalrService } from '@core/services/signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private coreService: CoreService,
    private chatService: SignalrService,
    private http: HttpClient,
    private ref: ViewContainerRef
  ) {
    this.coreService.loadIcons(['like']);
  }

  ngOnInit(): void {
    this.chatService.startConnection();
    this.chatService.chat.subscribe(res => {
      console.log(res);
    });
  }

  send() {
    this.http.get("chat").subscribe(res => {
      // console.log(res);
    });
  }
}
