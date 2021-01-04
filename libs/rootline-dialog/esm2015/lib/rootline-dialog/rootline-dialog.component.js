import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/flex-layout/flex";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/progress-spinner";
function RootlineDialogComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r2.typeColor);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.modalConfig.matIcon);
} }
function RootlineDialogComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "mat-icon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r3.typeColor);
    i0.ɵɵproperty("svgIcon", ctx_r3.modalConfig.localIcon);
} }
function RootlineDialogComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.modalConfig.headerText);
} }
function RootlineDialogComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "span", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.modalConfig.description);
} }
function RootlineDialogComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function RootlineDialogComponent_div_0_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.secodaryButton($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r6.modalConfig.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.modalConfig.secondaryButtonName, " ");
} }
function RootlineDialogComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function RootlineDialogComponent_div_0_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.primaryButton($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r7.modalConfig.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.modalConfig.primaryButtonName, " ");
} }
function RootlineDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, RootlineDialogComponent_div_0_div_2_Template, 3, 3, "div", 4);
    i0.ɵɵtemplate(3, RootlineDialogComponent_div_0_div_3_Template, 2, 3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, RootlineDialogComponent_div_0_div_5_Template, 3, 1, "div", 7);
    i0.ɵɵtemplate(6, RootlineDialogComponent_div_0_div_6_Template, 3, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵtemplate(8, RootlineDialogComponent_div_0_button_8_Template, 2, 2, "button", 9);
    i0.ɵɵtemplate(9, RootlineDialogComponent_div_0_button_9_Template, 2, 2, "button", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.matIcon && !ctx_r0.modalConfig.localIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.localIcon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.headerText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.secondaryButtonName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.modalConfig.primaryButtonName);
} }
function RootlineDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "mat-spinner", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelementStart(4, "span", 20);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("color", ctx_r1.modalConfig.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.modalConfig.loaderText);
} }
export class RootlineDialogComponent {
    constructor(config, ref) {
        this.ref = ref;
        this.modalConfig = config;
        this.typeColor = this.setModalColor(this.modalConfig);
    }
    primaryButton(event) {
        this.modalConfig.primaryEvent(event);
        this.ref.close();
    }
    secodaryButton(event) {
        this.modalConfig.secondaryEvent(event);
        this.ref.close();
    }
    setModalColor(config) {
        if (config.type == 'general') {
            return config.generalColor;
        }
        else if (config.type == 'success') {
            return config.successColor;
        }
        else if (config.type == 'warn') {
            return config.warnColor;
        }
        else if (config.type == 'error') {
            return config.errorColor;
        }
    }
}
RootlineDialogComponent.ɵfac = function RootlineDialogComponent_Factory(t) { return new (t || RootlineDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.MatDialogRef)); };
RootlineDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RootlineDialogComponent, selectors: [["rootline-dialog"]], decls: 2, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxLayoutAlign", "center center", "class", "modal-icon", 4, "ngIf"], ["class", "modal-icon", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "15px"], ["fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px"], ["mat-stroked-button", "", "class", "outline-secondary-button", 3, "color", "click", 4, "ngIf"], ["mat-raised-button", "", 3, "color", "click", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "modal-icon"], [3, "svgIcon"], ["fxLayoutAlign", "center center"], [1, "text-center", "modal-header"], [1, "modal-description"], ["mat-stroked-button", "", 1, "outline-secondary-button", 3, "color", "click"], ["mat-raised-button", "", 3, "color", "click"], ["fxLayoutAlign", "start center", "fxLayoutGap", "30px"], ["diameter", "40", 3, "color"], [2, "font-size", "16px"]], template: function RootlineDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RootlineDialogComponent_div_0_Template, 10, 6, "div", 0);
        i0.ɵɵtemplate(1, RootlineDialogComponent_div_1_Template, 6, 2, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.modalConfig.isLoader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.modalConfig.isLoader);
    } }, directives: [i2.NgIf, i3.DefaultLayoutDirective, i3.DefaultLayoutGapDirective, i3.DefaultLayoutAlignDirective, i4.MatIcon, i5.MatButton, i6.MatSpinner], styles: [".outline-secondary-button[_ngcontent-%COMP%]{background:transparent;border-color:currentColor}.text-center[_ngcontent-%COMP%]{text-align:center}.modal-header[_ngcontent-%COMP%]{font-size:20px;font-weight:600}.modal-description[_ngcontent-%COMP%]{color:#818181;font-size:14px}.modal-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:60px;height:60px;width:60px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RootlineDialogComponent, [{
        type: Component,
        args: [{
                selector: 'rootline-dialog',
                templateUrl: './rootline-dialog.component.html',
                styleUrls: ['./rootline-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdGxpbmUtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJIOi9Sb290LWxpbmUvUm9vdC1saW5lIG1hdGVyaWFscy9Bbmd1bGFyIGxpYnMvbGliLWZhY3RvcnkvcHJvamVjdHMvcm9vdGxpbmUtZGlhbG9nL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9yb290bGluZS1kaWFsb2cvcm9vdGxpbmUtZGlhbG9nLmNvbXBvbmVudC50cyIsImxpYi9yb290bGluZS1kaWFsb2cvcm9vdGxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ0NqRSwrQkFDSTtJQUFBLGdDQUFvQztJQUFBLFlBQXlCO0lBQUEsaUJBQVc7SUFDNUUsaUJBQU07OztJQURRLGVBQXlCO0lBQXpCLHlDQUF5QjtJQUFDLGVBQXlCO0lBQXpCLGdEQUF5Qjs7O0lBRWpFLCtCQUNJO0lBQUEsK0JBQWlGO0lBQ3JGLGlCQUFNOzs7SUFEMEMsZUFBeUI7SUFBekIseUNBQXlCO0lBQTNELHNEQUFpQzs7O0lBRzNDLCtCQUNJO0lBQUEsZ0NBQXVDO0lBQUEsWUFFakM7SUFBQSxpQkFBTztJQUNqQixpQkFBTTs7O0lBSHFDLGVBRWpDO0lBRmlDLG1EQUVqQzs7O0lBRVYsK0JBQ0k7SUFBQSxnQ0FBZ0M7SUFBQSxZQUE2QjtJQUFBLGlCQUFPO0lBQ3hFLGlCQUFNOzs7SUFEOEIsZUFBNkI7SUFBN0Isb0RBQTZCOzs7O0lBS3JFLGtDQUVJO0lBRHdDLHFOQUFnQztJQUN4RSxZQUNKO0lBQUEsaUJBQVM7OztJQUhtRCxnREFBMkI7SUFFbkYsZUFDSjtJQURJLHVFQUNKOzs7O0lBQ0Esa0NBRUk7SUFEQSx1TkFBK0I7SUFDL0IsWUFDSjtJQUFBLGlCQUFTOzs7SUFIaUIsZ0RBQTJCO0lBRWpELGVBQ0o7SUFESSxxRUFDSjs7O0lBM0JSLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSw4RUFDSTtJQUVKLDhFQUNJO0lBRUosOEJBQ0k7SUFBQSw4RUFDSTtJQUlKLDhFQUNJO0lBRVIsaUJBQU07SUFDVixpQkFBTTtJQUNOLDhCQUNJO0lBQUEsb0ZBRUk7SUFFSixxRkFFSTtJQUVSLGlCQUFNO0lBQ1YsaUJBQU07OztJQTNCTyxlQUFxRDtJQUFyRCxrRkFBcUQ7SUFHckQsZUFBNkI7SUFBN0IsbURBQTZCO0lBSUssZUFBOEI7SUFBOUIsb0RBQThCO0lBSzlCLGVBQStCO0lBQS9CLHFEQUErQjtJQU9sRSxlQUF1QztJQUF2Qyw2REFBdUM7SUFHVyxlQUFxQztJQUFyQywyREFBcUM7OztJQU1uRywrQkFDSTtJQUFBLDJCQUNJO0lBQUEsa0NBQXFFO0lBQ3pFLGlCQUFNO0lBQ04sMkJBQ0k7SUFBQSxnQ0FBOEI7SUFBQSxZQUE0QjtJQUFBLGlCQUFPO0lBQ3JFLGlCQUFNO0lBQ1YsaUJBQU07OztJQUw2QixlQUEyQjtJQUEzQixnREFBMkI7SUFHeEIsZUFBNEI7SUFBNUIsbURBQTRCOztBRDFCbEUsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUMyQixNQUE0QixFQUM3QyxHQUEwQztRQUExQyxRQUFHLEdBQUgsR0FBRyxDQUF1QztRQUVsRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxjQUFjLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBNEI7UUFDaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDNUI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQ25DLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztTQUM1QjthQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDaEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUNqQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs4RkE5QlUsdUJBQXVCLHVCQUl4QixlQUFlOzREQUpkLHVCQUF1QjtRQ1RwQyx5RUFDSTtRQTZCSix3RUFDSTs7UUEvQnNDLGdEQUE2QjtRQThCbEUsZUFBNEI7UUFBNUIsK0NBQTRCOztrRERyQnBCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7O3NCQUtJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNb2RhbENvbmZpZyB9IGZyb20gJy4uL3Jvb3RsaW5lLWRpYWxvZy5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyb290bGluZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9vdGxpbmUtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm9vdGxpbmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9vdGxpbmVEaWFsb2dDb21wb25lbnQge1xuICBtb2RhbENvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz47XG4gIHR5cGVDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvciAoXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIGNvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz4sXG4gICAgcHJpdmF0ZSByZWY6IE1hdERpYWxvZ1JlZjxSb290bGluZURpYWxvZ0NvbXBvbmVudD5cbiAgKSB7XG4gICAgdGhpcy5tb2RhbENvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnR5cGVDb2xvciA9IHRoaXMuc2V0TW9kYWxDb2xvcih0aGlzLm1vZGFsQ29uZmlnKTtcbiAgfVxuXG4gIHByaW1hcnlCdXR0b24oZXZlbnQpIHtcbiAgICB0aGlzLm1vZGFsQ29uZmlnLnByaW1hcnlFdmVudChldmVudCk7XG4gICAgdGhpcy5yZWYuY2xvc2UoKTtcbiAgfVxuICBzZWNvZGFyeUJ1dHRvbihldmVudCkge1xuICAgIHRoaXMubW9kYWxDb25maWcuc2Vjb25kYXJ5RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMucmVmLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGFsQ29sb3IoY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPikge1xuICAgIGlmIChjb25maWcudHlwZSA9PSAnZ2VuZXJhbCcpIHtcbiAgICAgIHJldHVybiBjb25maWcuZ2VuZXJhbENvbG9yO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLnR5cGUgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnN1Y2Nlc3NDb2xvcjtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlID09ICd3YXJuJykge1xuICAgICAgcmV0dXJuIGNvbmZpZy53YXJuQ29sb3I7XG4gICAgfSBlbHNlIGlmIChjb25maWcudHlwZSA9PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVycm9yQ29sb3I7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIzMHB4XCIgKm5nSWY9XCIhbW9kYWxDb25maWcuaXNMb2FkZXJcIj5cbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIyMHB4XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJtb2RhbENvbmZpZy5tYXRJY29uICYmICFtb2RhbENvbmZpZy5sb2NhbEljb25cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibW9kYWwtaWNvblwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJ0eXBlQ29sb3JcIj57eyBtb2RhbENvbmZpZy5tYXRJY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJtb2RhbENvbmZpZy5sb2NhbEljb25cIiBjbGFzcz1cIm1vZGFsLWljb25cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgICAgICAgPG1hdC1pY29uIFtzdmdJY29uXT1cIm1vZGFsQ29uZmlnLmxvY2FsSWNvblwiIFtzdHlsZS5jb2xvcl09XCJ0eXBlQ29sb3JcIj48L21hdC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxuICAgICAgICAgICAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiICpuZ0lmPVwibW9kYWxDb25maWcuaGVhZGVyVGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1jZW50ZXIgbW9kYWwtaGVhZGVyXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxDb25maWcuaGVhZGVyVGV4dFxuICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiICpuZ0lmPVwibW9kYWxDb25maWcuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLWRlc2NyaXB0aW9uXCI+e3sgbW9kYWxDb25maWcuZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyMHB4XCI+XG4gICAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNsYXNzPVwib3V0bGluZS1zZWNvbmRhcnktYnV0dG9uXCIgW2NvbG9yXT1cIm1vZGFsQ29uZmlnLmNvbG9yXCJcbiAgICAgICAgICAgICpuZ0lmPVwibW9kYWxDb25maWcuc2Vjb25kYXJ5QnV0dG9uTmFtZVwiIChjbGljayk9XCJzZWNvZGFyeUJ1dHRvbigkZXZlbnQpXCI+XG4gICAgICAgICAgICB7eyBtb2RhbENvbmZpZy5zZWNvbmRhcnlCdXR0b25OYW1lIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIFtjb2xvcl09XCJtb2RhbENvbmZpZy5jb2xvclwiICpuZ0lmPVwibW9kYWxDb25maWcucHJpbWFyeUJ1dHRvbk5hbWVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInByaW1hcnlCdXR0b24oJGV2ZW50KVwiPlxuICAgICAgICAgICAge3sgbW9kYWxDb25maWcucHJpbWFyeUJ1dHRvbk5hbWUgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJtb2RhbENvbmZpZy5pc0xvYWRlclwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBmeExheW91dEdhcD1cIjMwcHhcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8bWF0LXNwaW5uZXIgZGlhbWV0ZXI9XCI0MFwiIFtjb2xvcl09XCJtb2RhbENvbmZpZy5jb2xvclwiPjwvbWF0LXNwaW5uZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHhcIj57eyBtb2RhbENvbmZpZy5sb2FkZXJUZXh0IH19PC9zcGFuPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=