import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/member';
import { MemberServicesService } from 'src/app/member-services.service';
import { DetailDialogComponent } from '../dialogs/detail-dialog/detail-dialog.component';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] =['id','firstname', 'lastname', 'email', 'action','id2','firstname2', 'lastname2', 'email2','id3','firstname3', 'lastname3', 'email3']
  
  //members: Member[] =[]
   dataSource = new MatTableDataSource<Member>()
   

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private http:HttpClient, private memberService:MemberServicesService, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.showAllMember()
    

  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Edit(row: Member) {
    
    this.openEditDialog(row, 'Edit');
  
}

  openEditDialog(row: Member, title:string){
    const dialogRef = this.dialog.open(EditDialogComponent,{
      data:{row, title},
      
    })

    dialogRef.afterClosed().subscribe(result=>{
      console.log("this is closed");
      this.dataSource.data= result.data
      this.showAllMember()
    } )
    
  }
  openDetailDialog(mem:any){
    const dialogRef=this.dialog.open(DetailDialogComponent, {
      data: {mem}
      
    })
    console.log(mem)
    dialogRef.afterClosed().subscribe(()=>{
      console.log("this is closed");
      //this.dataSource.data= result
    } )
  }

}