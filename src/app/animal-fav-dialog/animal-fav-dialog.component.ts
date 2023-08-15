import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface UserData{
  name: string
}

@Component({
  selector: 'app-animal-fav-dialog',
  templateUrl: './animal-fav-dialog.component.html',
  styleUrls: ['./animal-fav-dialog.component.scss']
})
export class AnimalFavDialogComponent implements OnInit{

  name = ''
  favAnimal = '';

  constructor(public dialogRef: MatDialogRef<AnimalFavDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: UserData,){}
  
  ngOnInit(): void {
    this.name = this.data.name
  }

  sendData() {
    this.dialogRef.close(this.favAnimal)
  }
}
