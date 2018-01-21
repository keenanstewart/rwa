import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import "hammerjs";
import
{
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    // MatNavList,
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { routes } from "./app.route";
import { AppComponent } from "./components/app/app.component";
import { CategoriesComponent } from "./components/category/categories.component";
import { TagsComponent } from "./components/tag/tags.component";
import { QuestionsComponent } from "./components/question/questions.component";
import { QuestionAddUpdateComponent } from "./components/question/question-add-update.component";

import { CategoryService } from "./services/category.service";
import { TagService } from "./services/tag.service";
import { QuestionService } from "./services/question.service";

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TagsComponent,
        QuestionsComponent,
        QuestionAddUpdateComponent
    ],
    imports: [
        BrowserModule,
        // Router
        RouterModule.forRoot(routes),
        // Flex
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        // Material
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatCheckboxModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatChipsModule,
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        // MatNavList,
    ],
    providers: [
        CategoryService, TagService, QuestionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
