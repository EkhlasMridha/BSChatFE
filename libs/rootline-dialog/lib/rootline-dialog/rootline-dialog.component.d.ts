import { MatDialogRef } from '@angular/material/dialog';
import { ModalConfig } from '../rootline-dialog.config';
import * as i0 from "@angular/core";
export declare class RootlineDialogComponent {
    private ref;
    modalConfig: Partial<ModalConfig>;
    typeColor: string;
    constructor(config: Partial<ModalConfig>, ref: MatDialogRef<RootlineDialogComponent>);
    primaryButton(event: any): void;
    secodaryButton(event: any): void;
    private setModalColor;
    static ɵfac: i0.ɵɵFactoryDef<RootlineDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RootlineDialogComponent, "rootline-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=rootline-dialog.component.d.ts.map