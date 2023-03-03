import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService implements OnInit {
  selectedDay: boolean = true;
  selectedDay$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
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
          this.fooditem.push(e);
        });
      },
    });
  }

  ngOnInit(): void {}
  toggleDay() {
    this.selectedDay$.next(!this.selectedDay$.getValue());
    this.selectedDay = !this.selectedDay;
    if (this.selectedDay) {
      this.todayFood();
    } else {
      this.tommorowFood();
    }
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

  postFood(food: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}food-mains`, {
      data: food,
    });
  }

  getFoodInventory() {
    return this.http.get<any>(`${environment.apiUrl}food-inventories`).pipe(
      map((item) => {
        return item.data;
      })
    );
  }

  todayFood() {
    if (this.foodItemBreakFast.length > 0) {
      this.foodItemBreakFast = [];
    }
    if (this.foodItemLunch.length > 0) {
      this.foodItemLunch = [];
    }
    if (this.foodItemSnacks.length > 0) {
      this.foodItemSnacks = [];
    }
    this.getFood().subscribe({
      next: async (value) => {
        value.forEach((element: any) => {
          if (
            element.attributes.food_catagory.data.attributes.catType ===
              'BreakFast' &&
            element.attributes.Date === this.formatDate(new Date())
          ) {
            this.foodItemBreakFast.push(element.attributes.food_inventory.data);
          }
          if (
            element.attributes.food_catagory.data.attributes.catType ===
              'Lunch' &&
            element.attributes.Date === this.formatDate(new Date())
          ) {
            this.foodItemLunch.push(element.attributes.food_inventory.data);
          }
          if (
            element.attributes.food_catagory.data.attributes.catType ===
              'HighTea' &&
            element.attributes.Date === this.formatDate(new Date())
          ) {
            this.foodItemSnacks.push(element.attributes.food_inventory.data);
          }
        });
      },
      complete: () => {
        if (this.foodItemBreakFast.length === 0) {
          this.foodItemBreakFast.push({
            attributes: {
              FoodName: 'No Data',
              ImgUrl:
                'https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png',
            },
          });
        }
        if (this.foodItemLunch.length === 0) {
          this.foodItemLunch.push({
            attributes: {
              FoodName: 'No Data',
              ImgUrl:
                'https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png',
            },
          });
        }
        if (this.foodItemSnacks.length === 0) {
          this.foodItemSnacks.push({
            attributes: {
              FoodName: 'No Data',
              ImgUrl:
                'https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png',
            },
          });
        }
      },
    });
  }

  tommorowFood() {
    if (this.foodItemBreakFast.length > 0) {
      this.foodItemBreakFast = [];
    }
    if (this.foodItemLunch.length > 0) {
      this.foodItemLunch = [];
    }
    if (this.foodItemSnacks.length > 0) {
      this.foodItemSnacks = [];
    }
    var day = new Date();
    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);

    this.getFood().subscribe({
      next: async (value) => {
        value.forEach((element: any) => {
          if (
            element.attributes.food_catagory.data.attributes.catType ===
              'BreakFast' &&
            element.attributes.Date === this.formatDate(nextDay)
          ) {
            this.foodItemBreakFast.push(element.attributes.food_inventory.data);
          }
          if (
            element.attributes.food_catagory.data.attributes.catType ===
              'Lunch' &&
            element.attributes.Date === this.formatDate(nextDay)
          ) {
            this.foodItemLunch.push(element.attributes.food_inventory.data);
          }
          if (
            element.attributes.food_catagory.data.attributes.catType ===
              'HighTea' &&
            element.attributes.Date === this.formatDate(nextDay)
          ) {
            this.foodItemSnacks.push(element.attributes.food_inventory.data);
          }
        });
      },
      complete: () => {
        if (this.foodItemBreakFast.length === 0) {
          this.foodItemBreakFast.push({
            attributes: {
              FoodName: 'No Data',
              ImgUrl:
                'https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png',
            },
          });
        }
        if (this.foodItemLunch.length === 0) {
          this.foodItemLunch.push({
            attributes: {
              FoodName: 'No Data',
              ImgUrl:
                'https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png',
            },
          });
        }
        if (this.foodItemSnacks.length === 0) {
          this.foodItemSnacks.push({
            attributes: {
              FoodName: 'No Data',
              ImgUrl:
                'https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png',
            },
          });
        }
      },
    });
  }
}
