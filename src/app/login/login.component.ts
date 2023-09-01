import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: Usuario = new Usuario('', '');
}
