import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  // Traduções
  language = [
    {
      en: "Hello, my name is Lucas Gomes and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Lucas Gomes e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      es: "Hola, mi nombre es Lucas Gomes y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:",
    },
  ];

  // Arrays de names,images e metodos
  flags = [
    {
      name: "Brasil",
      flag: "../../../assets/images/brazil.png",
      metodo: () => (this.selected = this.language[0].pt),
    },
    {
      name: "Espanhol",
      flag: "../../../assets/images/spain.png",
      metodo: () => (this.selected = this.language[0].es),
    },
    {
      name: "Inglês",
      flag: "../../../assets/images/united-states.png",
      metodo: () => (this.selected = this.language[0].en),
    },
  ];

  //Valor inicial da linguagem
  selected = this.language[0].pt;

  //O Button ( Filho ) ira enviar um dados para o App ( pai )
  onChangeLanguage($event: string) {
    if ($event == "Brasil") {
      this.flags[0].metodo();
    } else if ($event == "Espanhol") {
      this.flags[1].metodo();
    } else {
      this.flags[2].metodo();
    }
  }
}
