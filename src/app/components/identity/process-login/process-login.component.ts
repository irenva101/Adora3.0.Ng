import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-process-login',
  standalone: true,
  imports: [],
  templateUrl: './process-login.component.html',
  styleUrl: './process-login.component.scss'
})
export class ProcessLoginComponent {
  constructor(private activeRouter: ActivatedRoute, private toastr : ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    const accessToken = this.activeRouter.snapshot.queryParamMap.get('access_token');
    const error = this.activeRouter.snapshot.queryParamMap.get('error');

    if (error) {
        this.toastr.error('Invalid login attempt. Please check your credentials.')
        this.router.navigate(['/'])
    }
    if (accessToken) {
      localStorage.setItem('token', accessToken);
      this.router.navigate(['/home'])
    }
  }
}
