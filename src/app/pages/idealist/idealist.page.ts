import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/service/idea.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-idealist',
  templateUrl: './idealist.page.html',
  styleUrls: ['./idealist.page.scss'],
})
export class IdealistPage implements OnInit {
  private ideas : Observable<Idea[]>;

  constructor(private ideaService : IdeaService) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

}
