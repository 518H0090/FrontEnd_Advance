import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule],
  // dua ra ngoai thi can export
  exports: [RegisterComponent],
})
export class LoginModule {}
