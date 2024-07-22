import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-identity-login',
  standalone: true,
  imports: [],
  providers: [AuthService],
  templateUrl: './identity-login.component.html',
  styleUrl: './identity-login.component.scss'
})
export class IdentityLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private toastr : ToastrService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    else {
      if(environment.useOpenIdDict)
      {
          this.authService.loginIdentity().subscribe(response => {
            this.document.location.href = response;
          });
      }
      else{
        this.openPrompt();
      }
    }
  }

  openPrompt(): void {
    const userInput = prompt('Unesite email:');
    if (userInput !== null) {
      this.authService.loginLocal(userInput).subscribe((response : any) => {
        if(response.status == 200)
        {
          localStorage.setItem("token",response.message)
          this.router.navigate(['home'])
        }
        else
        {
          this.toastr.error('Bad credentials.');
          setTimeout(() => {
            this.openPrompt();
          }, 1000);
        }

      }, error => {
        this.toastr.error('An error occurred.');
        setTimeout(() => {
          this.openPrompt();
        }, 1000);      });
    } else {
      this.openPrompt();
    }
  }
}
