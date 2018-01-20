import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { forkJoin } from "rxjs/observable/forkJoin";
import "rxjs/Rx";
import "../rxjs-extensions";

import { Question } from "../model/question";
import { CategoryService } from "./category.service";
import { Category } from "../model/category";

@Injectable()
export class QuestionService
{
    private _serviceUrl = "http://localhost:3000/questions";  // URL to web api
    constructor(private http: Http,
                public categoryService: CategoryService)
    {
    }

    getQuestions(): Observable<Question[]>
    {
        let url = this._serviceUrl;
        //return this.http.get(url).map(res => res.json());

        return Observable.forkJoin(
            this.http.get(url).map<any,Question[]>(res => res.json()),
            this.categoryService.getCategories())
            .map((combined,index) =>
            {
                let questions: Question[] = combined[0];
                let categories: Category[] = combined[1];
                questions.forEach(q =>
                {
                    q.categories = [];
                    q.categoryIds.forEach(id => q.categories.push(categories.find(element => element.id == id)))
                })
                return questions;
        })
    }
}
