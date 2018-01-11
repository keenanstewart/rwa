import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app/app.component";
import { CategoriesComponent } from "./components/category/categories.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent, CategoriesComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],

    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
