import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "../components/template/header/header.component";
import { FooterComponent } from "../components/template/footer/footer.component";
import { BotaoComponent } from "../components/botao/botao.component";
import { MainComponent } from "../components/template/main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BotaoComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
