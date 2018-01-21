import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./components/category/categories.component";
import { TagsComponent } from "./components/tag/tags.component";
import { QuestionsComponent } from "./components/question/questions.component";
import { QuestionAddUpdateComponent } from "./components/question/question-add-update.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/categories",
        pathMatch: "full"
    },
    {
        path: "categories",
        component: CategoriesComponent
    },
    {
        path: "tags",
        component: TagsComponent
    },
    {
        path: "questions",
        component: QuestionsComponent
    },
    {
        path: "questions/add",
        component: QuestionAddUpdateComponent
    }
];
