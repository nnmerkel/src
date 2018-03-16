import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitService } from './fruit.service';

import { SortByField } from './sortByField.pipe';


@NgModule({
    declarations: [
        AppComponent,
        FruitComponent,
        SortByField
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        FruitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
