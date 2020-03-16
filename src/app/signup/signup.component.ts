import { Component, OnInit } from "@angular/core";
import { Scrumuser } from "../scrumuser";
import { ScrumdataService } from "../scrumdata.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  feedback = "";
  constructor(private _scrumdataService: ScrumdataService) {}

  ngOnInit(): void {}

  userTypes = ["regular user", "project owner"];
  scrumUserModel = new Scrumuser("", "", "", "", "");

  onSubmit() {
    // console.log(this.scrumUserModel);
    console.log(this.scrumUserModel);
    this._scrumdataService.signup(this.scrumUserModel).subscribe(
      data => {
        console.log("success!", data),
          (this.feedback = "Your account was created successfully");
      },
      error => {
        console.log("Error!", error);
        this.feedback = "Signup Failed";
      }
    );
  }
}
