import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(
    private http: HttpClient
  ) { }

  getRecetasByUserId(userId: number): Observable<Receta[]> {
    return this.http.get<Receta[]>(`http://localhost:8090/recetas/user/${userId}`);
  }
}
