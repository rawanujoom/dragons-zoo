import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DragonsComponent } from './dragons/dragons.component';
import { DragonComponent } from './dragons/dragon/dragon.component';
import { LocationComponent } from './location/location.component';
import { LocationsService } from './services/locations.service';
import { DragonsService } from './services/dragons.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DragonsComponent,
    DragonComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DragonsService,
    LocationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
