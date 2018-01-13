import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CategoryService } from "../../services/category.service";
import { Category } from "../../model/category";

@Component({
    selector: "category-list",
    templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"]
})

export class CategoriesComponent implements OnInit
{
    categories: Category[];
    sub: any;

    constructor(private categoryService: CategoryService)
    {
        console.log("In CategoriesComponent");
    }

    ngOnInit()
    {
        console.log("In CategoriesComponent, ngOnInit");
        this.sub = this.categoryService.getCategories().subscribe(categories =>
            this.categories = categories);
    }

    ngOnDestroy()
    {
        if (this.sub)
            this.sub.unsubscribe();
    }
}
