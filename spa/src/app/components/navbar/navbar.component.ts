import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUsername().subscribe(username => {
      this.username = username;
    });
  }

  salir(): void {
    this.authService.logout();
  }

  comprobar():boolean{
    return this.authService.isLoggedIn();
  }
}
