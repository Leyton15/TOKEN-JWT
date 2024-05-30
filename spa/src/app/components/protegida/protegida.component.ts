import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrl: './protegida.component.css'
})
export class ProtegidaComponent implements OnInit {
  username: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUsername().subscribe(username => {
      this.username = username;
    });
  }
}
