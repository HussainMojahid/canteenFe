import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodInventoryServiceService implements OnInit {
  apiUrl = environment.apiUrl;
  itemList: any[] = [];
  constructor(private http: HttpClient) {
    this.getAllFood().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.itemList.push(element)
        console.log(element.attributes);
        
      });
    });
  }
  ngOnInit(): void {
   
  }
  getAllFood() {
    return this.http.get<any>(`${this.apiUrl}food-inventories`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  deleteFood(id: number) {
    return this.http.delete<any>(`${this.apiUrl}food-inventories/${id}`);
  }

  addFood(addFoodForm: FormGroup) {
    return this.http
      .post<any>(`${this.apiUrl}food-inventories`, {
        data: {
          FoodName: addFoodForm.value.FoodName,
          Price: addFoodForm.value.Price,
          ImgUrl: addFoodForm.value.ImageUrl,
        },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getFoodById(id: number) {
    console.log(id);

    return this.http.get<any>(`${this.apiUrl}food-inventories/${id}`).pipe(
      map((res: any) => {
        return res.data.attributes;
      })
    );
  }

  updateFood(editFoodForm: FormGroup, id: number) {
    return this.http
      .put<any>(`${this.apiUrl}food-inventories/${id}`, {
        data: {
          FoodName: editFoodForm.value.FoodName,
          Price: editFoodForm.value.Price,
          ImgUrl: editFoodForm.value.ImageUrl,
        },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
