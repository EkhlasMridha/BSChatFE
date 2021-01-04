import { InjectionToken } from '@angular/core';
import { ThemePalette } from "@angular/material/core";
export interface ModalConfig {
    warnColor: string;
    successColor: string;
    errorColor: string;
    generalColor: string;
    type: 'success' | 'warn' | 'error' | 'general';
    matIcon: string;
    localIcon: string;
    headerText: string;
    description: string;
    primaryButtonName: string;
    secondaryButtonName: string;
    modalWidth: string;
    disableClose: boolean;
    isLoader: boolean;
    loaderText: string;
    panelClass: string | string[];
    color: ThemePalette;
    primaryEvent: (event: any) => any;
    secondaryEvent: (event: any) => any;
}
export declare const DefaultConfig: Partial<ModalConfig>;
export interface ModalToken {
    default: ModalConfig;
    config: Partial<ModalConfig>;
}
export declare const ROOTLINE_MODAL_CONFIG: InjectionToken<ModalToken>;
//# sourceMappingURL=rootline-dialog.config.d.ts.map