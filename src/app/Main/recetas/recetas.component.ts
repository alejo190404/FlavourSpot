import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/models/Receta';
import { RecetaService } from 'src/app/servicio/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  recipes: Receta[] = [];
  userId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioReceta: RecetaService
  ) { }


  ngOnInit(): void{
    this.userId = Number(this.router.url.split('id=')[1]);
    this.servicioReceta.getRecetasByUserId(this.userId).subscribe(recetas => {
      console.log(recetas)
      this.recipes = recetas
    })
  }
}
