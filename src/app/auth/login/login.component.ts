import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AlertModel} from '../../shared/alert.model';
import {AuthService, GoogleLoginProvider} from 'angular-6-social-login';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loader: boolean;
  alert: AlertModel;
  title: string;

  constructor(
      private socialAuthService: AuthService,
      private router: Router
  ) {
    this.loader = true;
  }

  ngOnInit() {
    this.title = environment.title;
    this.loader = false;

  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      // socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'linkedin') {
      // socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform + ' sign in data : ' , userData);
          // Now sign-in with userData
          // ...

        }
    );
  }

  ssoLogin() {
    // const token = 'shib' + Math.random().toString(36).substr(2);
    const token = 'shib' + new Date().getTime();
    const targetURL = environment.rootURL + 'signin_callback?token=' + token;
    const redirectUrl = environment.rootURL + 'Shibboleth.sso/Login?target=' + targetURL;
    console.log('redirect url', redirectUrl);
    window.location.href = redirectUrl;
  }

  onSubmit(form: NgForm) {

  }
}
