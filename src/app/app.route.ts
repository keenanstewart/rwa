import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./components/category/categories.component";
import { TagsComponent } from "./components/tag/tags.component";
import { QuestionsComponent } from "./components/question/questions.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/categories",
        pathMatch: "full"
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'tags',
        component: TagsComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent
    }
];
