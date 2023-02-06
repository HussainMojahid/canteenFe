import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodInventoryServiceService implements OnInit {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
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
}
