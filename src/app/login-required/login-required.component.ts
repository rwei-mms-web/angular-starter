import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-required',
  templateUrl: './login-required.component.html',
  styleUrls: ['./login-required.component.css']
})
export class LoginRequiredComponent implements OnInit {

  constructor(private auth: AuthService) {
    this.auth.stateChange$.subscribe(() => {

    });
  }

  ngOnInit() {
  }

}
