import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatGridListModule, MatTabsModule, MatDividerModule, MatTableModule, MatMenuModule, MatListModule } from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatGridListModule,
  MatTabsModule,
  MatDividerModule,
  MatTableModule,
  MatMenuModule,
  MatListModule
];

@NgModule({
  imports: [ MATERIAL_COMPONENTS ],
  exports: [ MATERIAL_COMPONENTS ]
})
export class MaterialModule { }
