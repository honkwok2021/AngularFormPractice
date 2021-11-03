import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/member';
import { MemberServicesService } from 'src/app/member-services.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] =['id','firstname', 'lastname', 'email', 'action']
  
  members: Member[] =[]
   dataSource = new MatTableDataSource<Member>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private http:HttpClient, private memberService:MemberServicesService) { }

  ngOnInit(): void {

    this.showAllMember()

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  showAllMember(){
    this.memberService.getAllMember().subscribe(allMember => this.dataSource.data=allMember, error=> alert("sth is wrong" + error))
  }

  deleteOneMember(id:number){
    this.memberService.deleteMember(id).subscribe(() =>{
      this.dataSource.data = this.dataSource.data.filter(m => m.id !== id)
      alert("delete successfully")
    }
      
    )
  }
  

}