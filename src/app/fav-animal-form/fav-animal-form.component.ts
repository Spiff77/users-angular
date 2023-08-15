import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnimalFavDialogComponent } from '../animal-fav-dialog/animal-fav-dialog.component';

@Component({
  selector: 'app-fav-animal-form',
  templateUrl: './fav-animal-form.component.html',
  styleUrls: ['./fav-animal-form.component.scss']
})
export class FavAnimalFormComponent {

  name = ''
  favAnimals: string[] = []
  dialogRef: MatDialogRef<AnimalFavDialogComponent> | undefined;

  constructor(private dialog: MatDialog){}

  openModal(){
    this.dialogRef = this.dialog.open(AnimalFavDialogComponent, {
      data: {
        name: this.name
      }
    })
    this.dialogRef.afterClosed().subscribe(v => {
     if(v) this.favAnimals.push(v)
    })
    
  }

}