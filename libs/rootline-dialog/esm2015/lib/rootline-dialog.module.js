import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RootlineDialogComponent } from './rootline-dialog/rootline-dialog.component';
import { DefaultConfig, ROOTLINE_MODAL_CONFIG } from './rootline-dialog.config';
import { RootlineDialogService } from './rootline-dialog.service';
import * as i0 from "@angular/core";
export const DefaultComponentConfig = Object.assign({}, DefaultConfig);
export class RootlineDialogModule {
    static forChild(config = {}) {
        return {
            ngModule: RootlineDialogModule,
            providers: [
                {
                    provide: ROOTLINE_MODAL_CONFIG,
                    useValue: {
                        default: DefaultComponentConfig,
                        config,
                    },
                },
            ],
        };
    }
}
RootlineDialogModule.ɵmod = i0.ɵɵdefineNgModule({ type: RootlineDialogModule });
RootlineDialogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RootlineDialogModule_Factory(t) { return new (t || RootlineDialogModule)(); }, providers: [RootlineDialogService], imports: [[
            CommonModule,
            MatDialogModule,
            FlexLayoutModule,
            MatButtonModule,
            MatIconModule,
            MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RootlineDialogModule, { declarations: [RootlineDialogComponent], imports: [CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule], exports: [RootlineDialogComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RootlineDialogModule, [{
        type: NgModule,
        args: [{
                declarations: [RootlineDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule,
                    FlexLayoutModule,
                    MatButtonModule,
                    MatIconModule,
                    MatProgressSpinnerModule
                ],
                providers: [RootlineDialogService],
                exports: [RootlineDialogComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdGxpbmUtZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJIOi9Sb290LWxpbmUvUm9vdC1saW5lIG1hdGVyaWFscy9Bbmd1bGFyIGxpYnMvbGliLWZhY3RvcnkvcHJvamVjdHMvcm9vdGxpbmUtZGlhbG9nL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9yb290bGluZS1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQWUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFbEUsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLHFCQUM5QixhQUFhLENBQ2pCLENBQUM7QUFlRixNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBK0IsRUFBRTtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsUUFBUSxFQUFFO3dCQUNSLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLE1BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzt3REFkVSxvQkFBb0I7dUhBQXBCLG9CQUFvQixtQkFIcEIsQ0FBQyxxQkFBcUIsQ0FBQyxZQVJ6QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixhQUFhO1lBQ2Isd0JBQXdCO1NBQ3pCO3dGQUlVLG9CQUFvQixtQkFaaEIsdUJBQXVCLGFBRXBDLFlBQVk7UUFDWixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixhQUFhO1FBQ2Isd0JBQXdCLGFBR2hCLHVCQUF1QjtrREFFdEIsb0JBQW9CO2NBYmhDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYix3QkFBd0I7aUJBQ3pCO2dCQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IFJvb3RsaW5lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9yb290bGluZS1kaWFsb2cvcm9vdGxpbmUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0Q29uZmlnLCBNb2RhbENvbmZpZywgUk9PVExJTkVfTU9EQUxfQ09ORklHIH0gZnJvbSAnLi9yb290bGluZS1kaWFsb2cuY29uZmlnJztcbmltcG9ydCB7IFJvb3RsaW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vcm9vdGxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdENvbXBvbmVudENvbmZpZzogUGFydGlhbDxNb2RhbENvbmZpZz4gPSB7XG4gIC4uLkRlZmF1bHRDb25maWcsXG59O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtSb290bGluZURpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1Jvb3RsaW5lRGlhbG9nU2VydmljZV0sXG4gIGV4cG9ydHM6IFtSb290bGluZURpYWxvZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUm9vdGxpbmVEaWFsb2dNb2R1bGUge1xuICBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBQYXJ0aWFsPE1vZGFsQ29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxSb290bGluZURpYWxvZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUm9vdGxpbmVEaWFsb2dNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFJPT1RMSU5FX01PREFMX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogRGVmYXVsdENvbXBvbmVudENvbmZpZyxcbiAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=