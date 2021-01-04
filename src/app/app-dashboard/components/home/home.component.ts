import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { RootLineToasterService } from 'src/app/shared-modules/root-line-toaster/services/root-line-toaster.service';
import { IconService } from '@core/servcies/icon.service';
import { TesService } from '../../services/tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private confirmationService: ConfirmationStatusService,
    private iconService: IconService,
    private testService: TesService,
    private toaster: RootLineToasterService,
    private ref: ViewContainerRef
  ) {
    this.iconService.loadIcons(['like']);
    this.testService.getData().subscribe((res) => {
      console.log('result');
      console.log(res);
    });
  }

  ngOnInit(): void { }

  runCommand() {
    // this.confirmationService.openConfirmationModal({
    //   headerText: 'How are you guys?',
    //   description:
    //     'This is a test generic modal system for all possible cases.',
    //   primaryButtonName: 'Yes',
    //   secondaryButtonName: 'No',
    //   localIcon: 'like',
    //   type: 'success',
    //   primaryEvent: this.primaryButton,
    //   secondaryEvent: this.secondaryButton,
    // });
    this.toaster.dismis();
  }

  primaryButton() {
    console.log('Customized callback');
  }

  secondaryButton() {
    console.log('Customized callback 2');
  }

  runLoader() {
    // this.confirmationService.openConfirmationModal({
    //   isLoader: true,
    //   color: 'warn',
    // });
    this.toaster.openSnackbar(this.ref);
  }
}
