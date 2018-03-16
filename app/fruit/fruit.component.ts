import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
    selector: 'app-fruit',
    templateUrl: './fruit.component.html',
    styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {   
    constructor(private fruitService: FruitService) { }

    ngOnInit() {
        this.getFruits();
    }
    
    fruits: Fruit[];
    
    vote(fruit: Fruit): void {
        fruit.votes++;
        console.log(fruit.votes);
    }
    
    getFruits(): void {
        this.fruitService.getFruits()
            .subscribe(fruits => this.fruits = fruits);
    }
}
