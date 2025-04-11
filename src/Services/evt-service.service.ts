import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Model/Evt';

@Injectable({
  providedIn: 'root'
})
export class EvtServiceService {

  constructor(private h:HttpClient) { }
  getAllEvents():Observable<Evt[]>{
    return this.h.get<Evt[]>(`http://localhost:3000/evts`)
  }
  getEventById(id:string):Observable<Evt>{
    return this.h.get<Evt>(`http://localhost:3000/evts/${id}`)
  }
  addEvent(e:Evt):Observable<void>{
    return this.h.post<void>(`http://localhost:3000/evts`,e)
  }
  updateEvent(id:string, e:Evt):Observable<Evt>{
    return this.h.put<Evt>(`http://localhost:3000/evts/${id}`,e)
  }
  deleteEvent(id:string):Observable<void>{
    return this.h.delete<void>(`http://localhost:3000/evts/${id}`)
  }
}
