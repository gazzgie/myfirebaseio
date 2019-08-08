import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from 'src/app/service/idea.service';
import { ToastController, IonDatetime } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-ideadetails',
  templateUrl: './ideadetails.page.html',
  styleUrls: ['./ideadetails.page.scss'],
})
export class IdeadetailsPage implements OnInit {

  idea : Idea = {
    name  : '',
    notes : '',
    pass  : '',
    phone : null,
    nick  : '',
  };

  constructor(
    private activatedRoute : ActivatedRoute,
    private ideaService : IdeaService,
    private toastCtrl : ToastController,
    private router : Router,
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id)
    {
      this.ideaService.getIdea(id).subscribe(idea => {
        this.idea = idea;
      });
    }
   }

  // ionViewWillEnter()
  // {
  //   let id = this.activatedRoute.snapshot.paramMap.get('id');
  //   if(id)
  //   {
  //     this.ideaService.getIdea(id).subscribe(idea =>
  //       {
  //         this.idea = idea;
  //       });
  //   }
  // }
  addIdea() {
    this.ideaService.addIdea(this.idea).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Idea added');
    }, err => {
      this.showToast('adding your idea :(');
    });
  }
 
  deleteIdea() {
    this.ideaService.deleteIdea(this.idea.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Idea deleted');
    }, err => {
      this.showToast('deleting your idea :(');
    });
  }
 
  updateIdea() {
    this.ideaService.updateIdea(this.idea).then(() => {
      this.showToast('Idea updated');
    }, err => {
      this.showToast('updating your idea :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }
}
