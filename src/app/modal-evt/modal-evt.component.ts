import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Evt } from 'src/Model/Evt';
import { EvtServiceService } from 'src/Services/evt-service.service';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent /* implements OnInit */ {

  constructor(private dialogRef: MatDialogRef<ModalEvtComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,//accept the sended arguments,
    private ES: EvtServiceService
  ) {

    // if data is not empty (we enter from edit)
    if (data) {
      console.log("je suis dans edit ", data);
      this.ES.getEventById(data).subscribe((E) => {
        console.log('E', E)
        this.form = new FormGroup({
          id: new FormControl(E.id),
          titre: new FormControl(E.titre),
          dateDebut: new FormControl(E.dateDebut),
          dateFin: new FormControl(E.dateFin),
          lieu: new FormControl(E.lieu)
        })
      })
    } else {
      this.form = new FormGroup({
        id: new FormControl(null),
        titre: new FormControl(null),
        dateDebut: new FormControl(null),
        dateFin: new FormControl(null),
        lieu: new FormControl(null)
      })
    }
  }
  form!: FormGroup;
  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     titre: new FormControl(null),
  //     dateDebut: new FormControl(null),
  //     dateFin: new FormControl(null),
  //     lieu: new FormControl(null)
  //   })
  // }
  close(): void {
    this.dialogRef.close(this.form.value);
  }
  save(): void {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }
  update(): void {

    console.log("this object updated ");
  }
}
