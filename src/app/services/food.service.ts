import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IFoodItem from '../models/food.model';
import { DatePipe } from '@angular/common';

interface IFoodCard {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {


  selectedDay: boolean = true;

  foodItemBreakFast: any[] = [];

  foodItemLunch: any[] = [];

  foodItemSnacks: any[] = [];
  fooditem: any[] = [];

  formatDate(date: Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  constructor(private http: HttpClient) {
    this.getFoodInventory().subscribe({
      next: (response) => {
        response.forEach((e: any) => {
          this.fooditem.push(e.attributes);
          // console.log(e.attributes);

        });
      },
    });
  }

  // toggleDay() {
  //   this.selectedDay = !this.selectedDay;
  //   if (this.selectedDay) {
  //     this.todayFood();
  //   } else {
  //     this.tommorowFood();
  //   }
  // }


    
  // getFoodByDateAndCategory(date: Date, category: string) {
  //   const formattedDate = this.formatDate(date);

  //   return this.getFood().pipe(
  //     map((foodItems) => {
  //       return foodItems.filter((item: any) => {
  //         const foodCategory = item.attributes.food_catagory.data.attributes.catType;
  //         const foodDate = item.attributes.Date;

  //         if (foodCategory === category && foodDate === formattedDate) {
  //           return item.attributes.food_inventory.data.attributes;
  //         }
  //       });
  //     })
  //   );
  // }
foodItem: any[]=[];
  getFoodByCategoryAndDate(category: string, date: Date): Observable<any[]> {
    this.foodItem = []
    const formattedDate = this.formatDate(date);

    return this.getFood().pipe(
      map((foodItems) => {
        return foodItems.filter((item: any) => {
          const foodCategory = item.attributes.food_catagory.data.attributes.catType;
          const foodDate = item.attributes.Date;

          if (foodCategory === category && foodDate === formattedDate) {
            console.log(item.attributes.food_inventory.data.attributes);
            
           this.foodItem.push(item.attributes.food_inventory.data.attributes);
          }
        });
      })
    );
  }


  getFood() {
    return this.http
      .get<any>(`${environment.apiUrl}food-mains?populate=*`)
      .pipe(
        map((foodItem) => {
          return foodItem.data;
        })
      );
  }

  postFood(food: IFoodItem): Observable<IFoodItem> {
    return this.http.post<IFoodItem>(
      `${environment.apiUrl}food-mains?populate=*`,
      food
    );
  }

  getFoodInventory() {
    return this.http.get<any>(`${environment.apiUrl}food-inventories`).pipe(
      map((item) => {
        return item.data;
      })
    );
  }

  getDemo() {
    this.getFoodInventory().subscribe({
      next: (response) => {
        response.forEach((e: any) => {
          this.fooditem.push(e.attributes);
        });
      },
    });
  }

  public BCurrentIndex = 0;
  public LCurrentIndex = 0;
  public HCurrentIndex = 0;

  public Bcards: IFoodCard[] = [];
  public Lcards: IFoodCard[] = [];
  public Hcards: IFoodCard[] = [];

  foodCardPush(id: string, cards: IFoodCard[]) {
    if (cards.length === 0) {
      cards.push({
        id,
        visible: true,
      });
    } else {
      cards.push({
        id,
        visible: false,
      });
    }
  }

  foodCardPop(id: string, cards: IFoodCard[]) {
    cards = cards.filter((element) => element.id !== id);
  }

  register(id: string, category: number) {
    switch (category) {
      case 0: // Brekfast
        this.foodCardPush(id, this.Bcards);

        break;

      case 1: // Lunch
        this.foodCardPush(id, this.Lcards);

        break;
      case 2: // High Tea
        this.foodCardPush(id, this.Hcards);

        break;
    }
  }

  unregister(id: string, category: number) {
    // this.cards = this.cards.filter((element) => element.id !== id);
    switch (category) {
      case 0: // Brekfast
        this.foodCardPop(id, this.Bcards);

        break;

      case 1: // Lunch
        this.foodCardPop(id, this.Lcards);

        break;
      case 2: // High Tea
        this.foodCardPop(id, this.Hcards);

        break;
    }
  }

  isCardOpen(id: string, category: number): boolean {
    if (category === 0) {
      // Brekfast
      return !!this.Bcards.find((element) => element.id === id)?.visible;
    } else if (category === 1) {
      // Lunch
      return !!this.Lcards.find((element) => element.id === id)?.visible;
    } else if (category === 2) {
      // High Tea
      return !!this.Hcards.find((element) => element.id === id)?.visible;
    }

    return false;
  }

  toggleFood(action: string, category: number, cards: IFoodCard[]) {
    const card = cards.find((element) => element.visible === true);

    if (card) {
      const currentCardIndex = cards.indexOf(card);
      card.visible = !card.visible;

      if (action == 'next') {
        const nextCard = cards[currentCardIndex + 1];
        nextCard.visible = !nextCard.visible;

        switch (category) {
          case 0:
            this.BCurrentIndex = currentCardIndex + 1;

            break;
          case 1:
            this.LCurrentIndex = currentCardIndex + 1;

            break;
          case 2:
            this.HCurrentIndex = currentCardIndex + 1;

            break;
        }
      }
      if (action === 'prev') {
        const prevCard = cards[currentCardIndex - 1];
        prevCard.visible = !prevCard.visible;
        switch (category) {
          case 0:
            this.BCurrentIndex = currentCardIndex - 1;

            break;
          case 1:
            this.LCurrentIndex = currentCardIndex - 1;

            break;
          case 2:
            this.HCurrentIndex = currentCardIndex - 1;

            break;
        }
      }
    }
  }
  toggleCard(action: string, category: number) {
    if (category === 0) {
      // Brekfast
      this.toggleFood(action, category, this.Bcards);
    } else if (category === 1) {
      // Lunch

      this.toggleFood(action, category, this.Lcards);
    } else if (category === 2) {
      // High Tea
      this.toggleFood(action, category, this.Hcards);
    }
  }

  // todayFood() {
  //   console.log(
  //     this.foodItemBreakFast.length,
  //     this.foodItemLunch.length,
  //     this.foodItemSnacks.length
  //   );
  //   if (this.foodItemBreakFast.length > 0) {
  //     this.foodItemBreakFast = [];
  //     this.Bcards = [];
  //   }
  //   if (this.foodItemLunch.length > 0) {
  //     this.foodItemLunch = [];
  //     this.Lcards = [];
  //   }
  //   if (this.foodItemSnacks.length > 0) {
  //     this.foodItemSnacks = [];
  //     this.Hcards = [];
  //   }

  //   var day = new Date();
  //   // var nextDay = new Date(day);
  //   // day.setDate(day.getDate());
  //   console.log(this.formatDate(day));

  //   this.getFood().subscribe({
  //     next: async (value) => {
  //       value.forEach((element: any) => {
  //         if (
  //           element.attributes.food_catagory.data.attributes.catType ===
  //             'BreakFast' &&
  //           element.attributes.Date === this.formatDate(new Date())
  //         ) {
  //           this.foodItemBreakFast.push(
  //             element.attributes.food_inventory.data.attributes
  //           );
  //           console.log(this.foodItemBreakFast);
  //         }
  //         if (
  //           element.attributes.food_catagory.data.attributes.catType ===
  //             'Lunch' &&
  //           element.attributes.Date === this.formatDate(new Date())
  //         ) {
  //           this.foodItemLunch.push(
  //             element.attributes.food_inventory.data.attributes
  //           );
  //           console.log(this.foodItemLunch);
  //         }
  //         if (
  //           element.attributes.food_catagory.data.attributes.catType ===
  //             'HighTea' &&
  //           element.attributes.Date === this.formatDate(new Date())
  //         ) {
  //           this.foodItemSnacks.push(
  //             element.attributes.food_inventory.data.attributes
  //           );
  //           console.log(this.foodItemSnacks);
  //         }
  //       });
  //     },
  //   });
  // }
  

  // tommorowFood() {
  //   console.log(
  //     this.foodItemBreakFast.length,
  //     this.foodItemLunch.length,
  //     this.foodItemSnacks.length
  //   );
  //   if (this.foodItemBreakFast.length > 0) {
  //     this.foodItemBreakFast = [];
  //     this.Bcards = [];
  //   }
  //   if (this.foodItemLunch.length > 0) {
  //     this.foodItemLunch = [];
  //     this.Lcards = [];
  //   }
  //   if (this.foodItemSnacks.length > 0) {
  //     this.foodItemSnacks = [];
  //     this.Hcards = [];
  //   }
  //   var day = new Date();
  //   var nextDay = new Date(day);
  //   nextDay.setDate(day.getDate() + 1);

  //   console.log(this.formatDate(nextDay));

  //   this.getFood().subscribe({
  //     next: async (value) => {
  //       value.forEach((element: any) => {
  //         if (
  //           element.attributes.food_catagory.data.attributes.catType ===
  //             'BreakFast' &&
  //           element.attributes.Date === this.formatDate(nextDay)
  //         ) {
  //           this.foodItemBreakFast.push(
  //             element.attributes.food_inventory.data.attributes
  //           );
  //           console.log(this.foodItemBreakFast);
  //         }
  //         if (
  //           element.attributes.food_catagory.data.attributes.catType ===
  //             'Lunch' &&
  //           element.attributes.Date === this.formatDate(nextDay)
  //         ) {
  //           this.foodItemLunch.push(
  //             element.attributes.food_inventory.data.attributes
  //           );
  //           console.log(this.foodItemLunch);
  //         }
  //         if (
  //           element.attributes.food_catagory.data.attributes.catType ===
  //             'HighTea' &&
  //           element.attributes.Date === this.formatDate(nextDay)
  //         ) {
  //           this.foodItemSnacks.push(
  //             element.attributes.food_inventory.data.attributes
  //           );
  //           console.log(this.foodItemSnacks);
  //         }
  //       });
  //     },
  //   });
  // }
}
