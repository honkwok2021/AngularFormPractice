import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberServicesService {

  private apiUrl ='http://localhost:3000/members/'

  constructor(private http:HttpClient) { }

  getAllMember(): Observable<Member[]>{
    return this.http.get<Member[]>(this.apiUrl)
  }

  getOneMember(id:any):Observable<Member>{
    return this.http.get<Member>(this.apiUrl+ id)
  }

  createMember(data:Member):Observable<Member>{
    return this.http.post<Member>(this.apiUrl, data)
  }

  deleteMember(id:any): Observable<Member>{
    return this.http.delete<Member>(this.apiUrl+id)
  }

  updateMember(id:any, data:Member):Observable<Member>{
    return this.http.put<Member>(this.apiUrl+id, data)
  }
}
