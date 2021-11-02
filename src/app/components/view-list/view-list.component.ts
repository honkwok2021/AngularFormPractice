import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/member';
import { HttpClient } from '@angular/common/http';
import { MemberServicesService } from 'src/app/member-services.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  members: Member[] =[]
  constructor(private http:HttpClient, private memberService:MemberServicesService) { }

  ngOnInit(): void {

    this.showAllMember()

  }

  showAllMember(){
    this.memberService.getAllMember().subscribe(allMember => this.members=allMember, error=> alert("sth is wrong" + error))
  }

  deleteOneMember(id:number){
    this.memberService.deleteMember(id).subscribe(() =>{
      this.members = this.members.filter(m => m.id !== id)
      alert("delete successfully")
    }
      
    )
  }

}
