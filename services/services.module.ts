import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { TokenInterceptor } from './interceptor';
import { TokenStorage } from './token.storage';
import { AuthenticationService } from './authentication.service';
import { ConfirmationService, DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, TokenStorage, AuthenticationService,ConfirmationService,DialogService,DynamicDialogRef,DynamicDialogConfig,],
})
export class ServicesModule { }
export { MessageService } from 'primeng/api';
export { ConfirmationService } from 'primeng/api';