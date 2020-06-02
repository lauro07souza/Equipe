import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@arch/shared.module';

const routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
];

@NgModule({
  declarations: [InicioComponent],
  imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
  exports: [InicioComponent],
})
export class InicioModule {}
