import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from 'src/Model/Member';

@Injectable({
  providedIn: 'root'
})
//Le role de decorateur @Injectable c permet d'inhecter dans les composants et dans les services
export class MembersService {
  constructor(private http:HttpClient) {
   }
   GetAllMembers():Observable<Member[]>{
    return this.http.get<Member[]>('http://localhost:3000/members');
   }
   AddMember(f:any):Observable<void>{
    return this.http.post<void>('http://localhost:3000/members',f)//---2----
   }
   DeleteMember(id:string):Observable<void>{
    return this.http.delete<void>
    (`http://localhost:3000/members/${id}`)

   }
   GetMemberById(id:string):Observable<Member>{
    return this.http.get<Member>
    (`http://localhost:3000/members/${id}`)
   }
   UpdateMember(id:string,m:any):Observable<Member>{
    return this.http.put<Member>
    (`http://localhost:3000/members/${id}`,m)
   }

  }
