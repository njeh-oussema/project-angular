import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/Services/members.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  constructor(private Ms:MembersService, private dialog:MatDialog){
  }
  displayedColumns:String[]=['1','2','3','4','5','6']
  dataSource:any[]=[]
  ngOnInit(){
    //appeler la fonction getAllMembers
    this.fetch();
  }

  delete(id:string):void{

    //afficher la boite
    let dialogRef = this.dialog.open(ConfirmComponent, {
      height: '200px',
      width: '300px',
    });

    //atendre lle résultat user
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.Ms.DeleteMember(id).subscribe(()=>{
          this.fetch()
        })
      }
    });
    //
  }
  fetch(){
    this.Ms.GetAllMembers().subscribe((membre)=>{
      this.dataSource=membre
    })
  }


}
