import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menuApp';

total=0;
qty=0;


  pizzaMenu=[
    {id:1,name:"Margherita",price:35,description:"Maestro Sauce, Maestro Secret Cheese Mix",img:"assets/images/MA.png",quantity:0},
    {id:2,name:"Pepperoni",price:49,description:"Maestro Sauce, Cheese Mix, Tomato, Olive, Onion,Green Pepper, Mushroom",img:"assets/images/PE.png",quantity:0},
    {id:3,name:"Vegetarian",price:25,description:"Maestro Sauce, Cheese Mix, Pepperoni",img:"assets/images/VE.png",quantity:0},
    {id:4,name:"BBQ Chicken",price:25,description:"Maestro Sauce, Cheese Mix, Grilled Chicken, Onion, BBQ Swirl",img:"/assets/images/BBQ.png",quantity:0},
    {id:5,name:"Olive Oil Pesto",price:30,description:"Grilled Chicken, Fresh Cherry Tomatoes, Cheese Mix, Pesto Sauce",img:"assets/images/OOP.png",quantity:0},

  ];

  sum(itemId:number ,price:number){
     const item = this.pizzaMenu.find(i => i.id === itemId);
     if (item) {
      item.quantity += 1;
      this.total= this.total+price;
      this.qty+=1;
     }
    }
  
  subtract(itemId:number ,price:number){
      const item = this.pizzaMenu.find(i => i.id === itemId);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        this.total -= price;
        this.qty -= 1;
    }
  
  }

  //SEARCH ITMES
foodname:String="";
find(p:any[]){
  return p.filter(item => item.name.toLowerCase().includes(this.foodname.toLowerCase()));
}



}

