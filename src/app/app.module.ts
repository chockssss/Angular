import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule} from '@angular/common/http'

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
import { ComsumeParentComponent } from './consume/comsume-parent/comsume-parent.component';
import { ComsumeChild1Component } from './consume/comsume-child1/comsume-child1.component';
import { ComsumeChild2Component } from './consume/comsume-child2/comsume-child2.component';
import { ChildComponent } from './consume/child/child.component';
import { TemplateformSampleComponent } from './forms/templateform-sample/templateform-sample.component';
import { ReactiveformSampleComponent } from './forms/reactiveform-sample/reactiveform-sample.component';
import { Animationsample1Component } from './animation/animationsample1/animationsample1.component';
import { RestApiSample1Component } from './restAPI/rest-api-sample1/rest-api-sample1.component';

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
    BadrouteComponent,
    ComsumeParentComponent,
    ComsumeChild1Component,
    ComsumeChild2Component,
    ChildComponent,
    TemplateformSampleComponent,
    ReactiveformSampleComponent,
    Animationsample1Component,
    RestApiSample1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
      path: 'consume services',
      component:ComsumeParentComponent,
      children:[{
        path: 'child1',
        component: ComsumeChild1Component
      },
      {
        path: 'child2',
        component:ComsumeChild2Component
      }]
    },
    {
      path: 'template',
      component: TemplateformSampleComponent
    },
    {
      path: 'reactive',
      component: ReactiveformSampleComponent
    },
    {
      path: 'animation',
      component: Animationsample1Component
    },
    {
      path: 'remote',
      component: RestApiSample1Component
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
