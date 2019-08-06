import { ListboxModule } from 'primeng/listbox';
import { SharedModule as share } from 'primeng/shared';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';


import { GrowlModule, InputTextModule, ColorPickerModule, SpinnerModule, SliderModule, TriStateCheckboxModule, PanelModule, EditorModule, TooltipModule, KeyFilterModule, CardModule } from 'primeng/primeng';

import { AutoCompleteModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/datatable';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { BlockUIModule } from 'primeng/blockui';
import { ChartModule } from 'primeng/chart';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { MultiSelectModule } from 'primeng/primeng';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ValidateComponent } from './validate/validate.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

;
import {InputSwitchModule} from 'primeng/inputswitch';
import { ServicesModule } from '../services/services.module';
@NgModule({
  declarations: [ValidateComponent, AuditLogComponent],
  imports: [
    ReactiveFormsModule, HttpClientModule, FormsModule, share, CommonModule, ListboxModule, TableModule, PaginatorModule,  CommonModule, HttpClientModule, ListboxModule, ReactiveFormsModule, GrowlModule, FileUploadModule, TieredMenuModule, TabViewModule, DialogModule, FormsModule, TableModule,
    ConfirmDialogModule, ToastModule, ButtonModule, CalendarModule, PaginatorModule, DataTableModule, AutoCompleteModule, DynamicDialogModule, RadioButtonModule, CheckboxModule, InputTextModule, InputMaskModule,
    EditorModule, FullCalendarModule, MultiSelectModule, NgMultiSelectDropDownModule,
    ColorPickerModule, SpinnerModule, SliderModule, TriStateCheckboxModule, TabMenuModule, BlockUIModule, PanelModule, ChartModule, TooltipModule,
    KeyFilterModule,
    DropdownModule,
    ProgressBarModule,
    CardModule,
    ServicesModule,
    InputSwitchModule
    

  ],
  exports: [
    ReactiveFormsModule, HttpClientModule, FormsModule, share, CommonModule, ListboxModule, TableModule, PaginatorModule, CommonModule, HttpClientModule, ListboxModule, ReactiveFormsModule, GrowlModule, FileUploadModule, TieredMenuModule, TabViewModule, DialogModule, FormsModule, TableModule,
    ConfirmDialogModule, ToastModule, ButtonModule, CalendarModule, PaginatorModule, DataTableModule, AutoCompleteModule, DynamicDialogModule, RadioButtonModule, CheckboxModule, InputTextModule, InputMaskModule,
    EditorModule, FullCalendarModule, MultiSelectModule, NgMultiSelectDropDownModule,
    ColorPickerModule, SpinnerModule, SliderModule, TriStateCheckboxModule, TabMenuModule, BlockUIModule, PanelModule, ChartModule, ValidateComponent, TooltipModule,
    AuditLogComponent,
    KeyFilterModule,
    DropdownModule,
    ProgressBarModule, CardModule,
   
     ServicesModule,
     InputSwitchModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}

