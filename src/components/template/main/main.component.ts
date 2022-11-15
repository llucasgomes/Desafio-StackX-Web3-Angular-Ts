import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"],
})
export class MainComponent {
  @Input() selected!: string;
  @Input() tecnologias!: string[];

  ngOnInit(): void {}
}
