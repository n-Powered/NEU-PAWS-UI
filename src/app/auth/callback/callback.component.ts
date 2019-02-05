import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AlertModel} from '../../shared/alert.model';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  loader: boolean;
  title: string;
  alert: AlertModel;

  constructor(
      private router: Router
  ) {
    this.loader = true;
  }

  ngOnInit() {
    this.title = environment.title;
    setTimeout(() => {
      this.router.navigate(['user']);
    }, 5000);
  }

}