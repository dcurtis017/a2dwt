import {Component, Input, OnInit} from '@angular/core';

@Component({
    templateUrl: 'app/components/stars/stars.html',
    styles: [`.starrating { color: #d17581;}`],
    selector: 'auction-stars'
})
export default class StarsComponent implements OnInit
{
    @Input() count: number = 5;
    @Input() rating: number = 0;
    stars: boolean[] = [];//each element is a single star that will render

    ngOnInit()//called once right after the components's data bound properties have been checked for hte first time and before
    //any of its children have been checked
    {
        for (let i = 1; i < this.count; ++i)
        {
            this.stars.push(i > this.rating);//false - empty star
        }
    }
}