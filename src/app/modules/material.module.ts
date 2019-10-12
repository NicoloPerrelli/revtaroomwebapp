import { NgModule } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: []
})
export class MaterialModule { }
