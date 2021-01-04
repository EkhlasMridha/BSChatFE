import { Inject, Injectable } from '@angular/core';
import { ROOTLINE_MODAL_CONFIG } from './rootline-dialog.config';
import { RootlineDialogComponent } from './rootline-dialog/rootline-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class RootlineDialogService {
    constructor(dialog, token) {
        this.dialog = dialog;
        this.modalConfig = Object.assign(Object.assign({}, token.default), token.config);
        this.modalConfig = this.verifyConfig(this.modalConfig);
    }
    applyConfig(config) {
        config = this.verifyConfig(config);
        return Object.assign(Object.assign({}, this.modalConfig), config);
    }
    verifyConfig(config) {
        let verfiedConfig = Object.assign({}, config);
        if (config.isLoader) {
            verfiedConfig.modalWidth = 'auto';
        }
        return verfiedConfig;
    }
    openDialog(config = {}) {
        let dialogConfig = this.applyConfig(config);
        return this.dialog.open(RootlineDialogComponent, {
            width: dialogConfig.modalWidth,
            disableClose: dialogConfig.disableClose,
            panelClass: dialogConfig.panelClass,
            data: dialogConfig,
        });
    }
    openConfirmationModal(config = {}) {
        return this.openDialog(config);
    }
}
RootlineDialogService.ɵfac = function RootlineDialogService_Factory(t) { return new (t || RootlineDialogService)(i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(ROOTLINE_MODAL_CONFIG)); };
RootlineDialogService.ɵprov = i0.ɵɵdefineInjectable({ token: RootlineDialogService, factory: RootlineDialogService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RootlineDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1.MatDialog }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROOTLINE_MODAL_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdGxpbmUtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiSDovUm9vdC1saW5lL1Jvb3QtbGluZSBtYXRlcmlhbHMvQW5ndWxhciBsaWJzL2xpYi1mYWN0b3J5L3Byb2plY3RzL3Jvb3RsaW5lLWRpYWxvZy9zcmMvIiwic291cmNlcyI6WyJsaWIvcm9vdGxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLHFCQUFxQixFQUEyQixNQUFNLDBCQUEwQixDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7QUFHdEYsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUNVLE1BQWlCLEVBQ00sS0FBaUI7UUFEeEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUd6QixJQUFJLENBQUMsV0FBVyxtQ0FDWCxLQUFLLENBQUMsT0FBTyxHQUNiLEtBQUssQ0FBQyxNQUFNLENBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxXQUFXLENBQUMsTUFBNEI7UUFDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsdUNBQVksSUFBSSxDQUFDLFdBQVcsR0FBSyxNQUFNLEVBQUc7SUFDNUMsQ0FBQztJQUVPLFlBQVksQ0FBQyxNQUE0QjtRQUMvQyxJQUFJLGFBQWEscUJBQThCLE1BQU0sQ0FBRSxDQUFDO1FBQ3hELElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixhQUFhLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUNuQztRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxVQUFVLENBQUMsU0FBK0IsRUFBRTtRQUNsRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDL0MsS0FBSyxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQzlCLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQixDQUNuQixTQUErQixFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzswRkExQ1UscUJBQXFCLHlDQUl0QixxQkFBcUI7NkRBSnBCLHFCQUFxQixXQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVOztzQkFLTixNQUFNO3VCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgUk9PVExJTkVfTU9EQUxfQ09ORklHLCBNb2RhbENvbmZpZywgTW9kYWxUb2tlbiB9IGZyb20gJy4vcm9vdGxpbmUtZGlhbG9nLmNvbmZpZyc7XG5pbXBvcnQgeyBSb290bGluZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcm9vdGxpbmUtZGlhbG9nL3Jvb3RsaW5lLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm9vdGxpbmVEaWFsb2dTZXJ2aWNlIHtcbiAgbW9kYWxDb25maWc6IFBhcnRpYWw8TW9kYWxDb25maWc+O1xuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBASW5qZWN0KFJPT1RMSU5FX01PREFMX0NPTkZJRykgdG9rZW46IE1vZGFsVG9rZW5cbiAgKSB7XG4gICAgdGhpcy5tb2RhbENvbmZpZyA9IHtcbiAgICAgIC4uLnRva2VuLmRlZmF1bHQsXG4gICAgICAuLi50b2tlbi5jb25maWcsXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsQ29uZmlnID0gdGhpcy52ZXJpZnlDb25maWcodGhpcy5tb2RhbENvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5Q29uZmlnKGNvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz4pOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPiB7XG4gICAgY29uZmlnID0gdGhpcy52ZXJpZnlDb25maWcoY29uZmlnKTtcblxuICAgIHJldHVybiB7IC4uLnRoaXMubW9kYWxDb25maWcsIC4uLmNvbmZpZyB9O1xuICB9XG5cbiAgcHJpdmF0ZSB2ZXJpZnlDb25maWcoY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPik6IFBhcnRpYWw8TW9kYWxDb25maWc+IHtcbiAgICBsZXQgdmVyZmllZENvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz4gPSB7IC4uLmNvbmZpZyB9O1xuICAgIGlmIChjb25maWcuaXNMb2FkZXIpIHtcbiAgICAgIHZlcmZpZWRDb25maWcubW9kYWxXaWR0aCA9ICdhdXRvJztcbiAgICB9XG4gICAgcmV0dXJuIHZlcmZpZWRDb25maWc7XG4gIH1cblxuICBwcml2YXRlIG9wZW5EaWFsb2coY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPiA9IHt9KSB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZyA9IHRoaXMuYXBwbHlDb25maWcoY29uZmlnKTtcblxuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKFJvb3RsaW5lRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogZGlhbG9nQ29uZmlnLm1vZGFsV2lkdGgsXG4gICAgICBkaXNhYmxlQ2xvc2U6IGRpYWxvZ0NvbmZpZy5kaXNhYmxlQ2xvc2UsXG4gICAgICBwYW5lbENsYXNzOiBkaWFsb2dDb25maWcucGFuZWxDbGFzcyxcbiAgICAgIGRhdGE6IGRpYWxvZ0NvbmZpZyxcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5Db25maXJtYXRpb25Nb2RhbChcbiAgICBjb25maWc6IFBhcnRpYWw8TW9kYWxDb25maWc+ID0ge31cbiAgKTogTWF0RGlhbG9nUmVmPFJvb3RsaW5lRGlhbG9nQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbkRpYWxvZyhjb25maWcpO1xuICB9XG59XG4iXX0=