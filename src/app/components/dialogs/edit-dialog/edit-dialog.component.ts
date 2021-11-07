import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/member';
import { MemberServicesService } from 'src/app/member-services.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  
  
  title!: string;

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder, private memberService:MemberServicesService) { }

  ngOnInit(): void {
    this.getAMember(this.data.row.id)
    
  }

  form = this.fb.group({
    firstName:[''],
    lastName:[''],
    phone:[''],
    email:[''],
    address:this.fb.group({
      street:[''],
      state:[''],
      postCode:['']
    })
  })

  /*form=this.fb.group({
    id:[this.data.row.id],
    firstName:[this.data.row.firstName],
    lastName:[this.data.row.lastName],
    phone:[this.data.row.phone],
    email:[this.data.row.email],
    address:this.fb.group({
      street:[this.data.row.street],
      state:[this.data.row.state],
      postCode:[this.data.row.postCode]
    })
  })*/

  getAMember(id: any){
    this.memberService.getOneMember(id).subscribe(
      detail => {
        this.form.patchValue(detail)
      console.log("detail",detail)
      },
      error=> alert("sth wrong" + error)
    )
  }
  

  onEditClick() {
    console.log(this.form.value)
    this.updateAMember(this.data.row.id, this.form.value)
    this.dialogRef.close(this.form.value);
  }

  updateAMember(id: any, selected: Member){
    this.memberService.updateMember(id, selected).subscribe(
      response => alert("updated" + response.firstName),
      error => alert("sth wrong" + error)
      
      
    )
  }

}
