import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { routes } from "./app.route";
import { AppComponent } from "./components/app/app.component";
import { CategoriesComponent } from "./components/category/categories.component";
import { TagsComponent } from "./components/tag/tags.component";
import { QuestionsComponent } from "./components/question/questions.component";

import { CategoryService } from "./services/category.service";
import { TagService } from "./services/tag.service";
import { QuestionService } from "./services/question.service";

@NgModule({
    declarations: [
        AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent
    ],
    imports: [
        BrowserModule,
        // Router
        RouterModule.forRoot(routes),
        FormsModule,
        HttpModule
    ],
    providers: [
        CategoryService, TagService, QuestionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
