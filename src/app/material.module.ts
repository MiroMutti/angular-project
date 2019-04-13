import { NgModule } from "@angular/core";
import { 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ]
})

export class MaterialModule {}