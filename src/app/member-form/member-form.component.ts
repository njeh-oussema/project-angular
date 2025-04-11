import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembersService } from 'src/Services/members.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  constructor(
    private ms: MembersService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  form!: FormGroup;
  idCuourant: string | null = null;

  ngOnInit() {
    //1. recupurer l'id de puis la route
    //2. tester la valeur de l'id : si non-null -> edit
    //3. si non create

    this.idCuourant = this.activatedRoute.snapshot.params['id'];
    console.log(this.idCuourant);
    if (this.idCuourant) {
      this.ms.GetMemberById(this.idCuourant).subscribe((m) => {
        this.form = new FormGroup({
          cin: new FormControl(m.cin, [Validators.required]),
          name: new FormControl(m.name),
          Type: new FormControl(m.Type),
          CreatedDate: new FormControl(m.CreatedDate),
        });
      });
    } else {
      this.form = new FormGroup({
        cin: new FormControl(null, [Validators.required]),
        name: new FormControl(null),
        Type: new FormControl(null),
        CreatedDate: new FormControl(null),
      });
    }
  }
  //---1---
  sub(): void {
    console.log(this.form.value);
    if (this.idCuourant) {
      this.ms.UpdateMember(this.idCuourant, this.form.value).subscribe(() => {
        //redirection vers la page members
        this.route.navigate(['']);
      });
    } else {
    this.ms.AddMember(this.form.value).subscribe(() => {
      //redirection vers la page members
      this.route.navigate(['']);
    });
  }}
}
