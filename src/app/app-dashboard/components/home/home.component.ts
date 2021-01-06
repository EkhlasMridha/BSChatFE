import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserModel } from '@contract/user.model';
import { CoreService } from '@core/core.service';
import { SignalrService } from '@core/services/signalr.service';
import { ChatBoxService } from '../../services/chat-box.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  userList: UserModel[];
  constructor (
    private coreService: CoreService,
    private chatService: SignalrService,
    private userService: ChatBoxService,
  ) {
    this.coreService.loadIcons(['like']);
  }

  ngOnInit(): void {
    this.chatService.startConnection();
    this.listenToMessage();
    this.getUserList();
  }

  send() {

  }

  getUserList() {
    this.userService.getUserList().subscribe(res => {
      this.userList = res;
      console.log(res);
    });
  }

  listenToMessage() {
    this.chatService.chat.subscribe(res => {
      console.log(res);
    });
  }
}
