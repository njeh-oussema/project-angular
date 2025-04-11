import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Model/Evt';
import { EvtServiceService } from 'src/Services/evt-service.service';
import { ModalEvtComponent } from '../modal-evt/modal-evt.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-evt',
  templateUrl: './evt.component.html',
  styleUrls: ['./evt.component.css']
})
export class EvtComponent implements OnInit {
  constructor(private es: EvtServiceService, private dialog: MatDialog) { }
  events = new MatTableDataSource();

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  openEdit(id: string) {
    const dialogConfig = new MatDialogConfig()
    // Plcaer l'id dans la propriété data
    dialogConfig.data = id;
    // lancer la boite
    // open is a predifined function that accept in the argument this type of Data ! instance of this (MatDialogConfig) 
    let dialogRef = this.dialog.open(ModalEvtComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((res) => {
      this.es.updateEvent(id, res).subscribe(() => {
        this.fetchData();
      })
    })
  }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.es.getAllEvents().subscribe((res) => {
      this.events.data = res;
      console.log(this.events.data);
    });
  }


  open(): void {
    let dialogRef = this.dialog.open(ModalEvtComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res.titre != null) {
        this.es.addEvent(res).subscribe(() => {
          this.fetchData();
        });
      }
    })
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.events.filter = filterValue.trim().toLowerCase();
  }
  // update():void{
  // }
}
