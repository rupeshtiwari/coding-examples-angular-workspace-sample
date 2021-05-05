import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CoreDataModule } from 'projects/core-data/src/public-api';
import { MaterialModule } from 'projects/material/src/public-api';
import { UiLoginModule } from 'projects/ui-login/src/public-api';
import { UiToolbarModule } from 'projects/ui-toolbar/src/public-api';
import { InMemoryDataService } from 'projects/core-data/src/lib/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './coures/courses/courses.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreDataModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    UiLoginModule,
    UiToolbarModule,
    MaterialModule,
    CoursesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      apiBase: 'api/',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
