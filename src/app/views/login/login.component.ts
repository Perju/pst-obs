import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ObsUrl } from 'src/app/services/obs-api.service'
import { ObsAuthService } from 'src/app/services/obs-auth.service'

@Component({
  selector: 'obs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  test = 'primary'

  public formulario = new FormGroup({
    host: new FormControl('127.0.0.1', Validators.required),
    port: new FormControl('4455', []),
    password: new FormControl('password', [])
  })

  constructor(private authService: ObsAuthService, private router: Router) {
    authService.isLoggedIn$.subscribe({
      next: (data) => {
        this.test = data ? 'accent' : 'primary'
      }
    })
  }
  submitForm() {
    if (this.formulario.invalid) {
      return
    }
    let obsUrl: ObsUrl = {
      protocol: 'ws',
      host: this.formulario.get('host')?.value || '',
      port: this.formulario.get('port')?.value || ''
    }
    let password = this.formulario.get('password')?.value
    this.authService.login(obsUrl, password || '').subscribe()
  }
}
