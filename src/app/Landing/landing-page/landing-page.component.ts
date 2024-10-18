import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/servicio/usuario.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  usuario: Usuario = {
    email: '',
    password: '',
    nombreCompleto: '',
    username: '',
    id: 0
  }

  constructor(
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  hacerLogin(ususario: any) {
    this.servicioUsuario.login(this.usuario).subscribe(id => {
      this.router.navigateByUrl('/profile?id=' + id);
    })
    // Aquí puedes añadir la lógica para manejar el envío del formulario, como hacer una llamada a un servicio

  }
}
