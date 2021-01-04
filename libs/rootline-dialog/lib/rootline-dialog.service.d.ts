import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalConfig, ModalToken } from './rootline-dialog.config';
import { RootlineDialogComponent } from './rootline-dialog/rootline-dialog.component';
import * as i0 from "@angular/core";
export declare class RootlineDialogService {
    private dialog;
    modalConfig: Partial<ModalConfig>;
    constructor(dialog: MatDialog, token: ModalToken);
    private applyConfig;
    private verifyConfig;
    private openDialog;
    openConfirmationModal(config?: Partial<ModalConfig>): MatDialogRef<RootlineDialogComponent>;
    static ɵfac: i0.ɵɵFactoryDef<RootlineDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RootlineDialogService>;
}
//# sourceMappingURL=rootline-dialog.service.d.ts.map