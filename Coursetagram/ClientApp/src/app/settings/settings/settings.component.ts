import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm:FormGroup
  constructor() {
    this.settingsForm=new FormGroup({
      
    });
  }

  ngOnInit() {
  }


}
