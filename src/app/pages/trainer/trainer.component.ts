import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { StorageService } from 'src/app/services/storage.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  constructor(private storageService: StorageService, private trainerService: TrainerService) { }

  ngOnInit(): void {
  }

  // get trainerName () {
  //   return this.storageService.getActiveTrainer();
  //   }

  get trainer(){
    return this.storageService.getActiveTrainer() as Trainer;
  }


}
