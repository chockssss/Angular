import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCustomComponentComponent } from './my-first-custom-component/my-first-custom-component.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { ReviewComponent } from './assignments/allcomponents/review/review.component';
import { TitleComponent } from './assignments/allcomponents/title/title.component';
import { ThumbnailComponent } from './assignments/allcomponents/thumbnail/thumbnail.component';
import { DescriptionComponent } from './assignments/allcomponents/description/description.component';
import { DirectivesComponent } from './superHTML/directives/directives.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { BadrouteComponent } from './ErrorHandling/badroute/badroute.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCustomComponentComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    SonComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectivesComponent,
    PipesDemoComponent,
    BadrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'family',
      pathMatch: 'full'
    },
    {
      path: 'family',
      component:FamilyComponent,
      children:[{
        path: '',
        redirectTo: 'father',
        pathMatch: 'full'
      },
      {
        path: 'father',
        component: FatherComponent
      },
      {
        path: 'mother',
        component: MotherComponent
      },
      {
        path: 'daughter',
        component: DaughterComponent
      },
      {
        path: 'son',
        component: SonComponent
      }
      ]
    },
    {
      path: 'review',
      component:ReviewComponent
    },
    {
      path: 'directive',
      component:DirectivesComponent
    },
    {
      path: 'pipes',
      component:PipesDemoComponent
    },
    {
      path: '**',
      component:BadrouteComponent
    }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
