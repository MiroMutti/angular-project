import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['']
    })
  }

}
