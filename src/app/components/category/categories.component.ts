import { Component } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { Category } from "../../model/category";


@Component({
    selector: "category-list",
    templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"]
})

export class CategoriesComponent
{
    categories: Category[];
    sub: any;

    constructor(private categoryService: CategoryService)
    {
    }

    ngOnInit()
    {
        this.sub = this.categoryService.getCategories().subscribe(categories =>
            this.categories = categories);
    }

    ngOnDestroy()
    {
        if (this.sub)
            this.sub.unsubscribe();
    }
}
