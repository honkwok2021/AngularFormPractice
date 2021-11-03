import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/member';
import { MemberServicesService } from 'src/app/member-services.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  currentMember!: Member
  
  constructor(private memberService:MemberServicesService, private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAMember(this.route.snapshot.paramMap.get('id'))
    
  }

  registrationForm = this.fb.group({
    firstName:{ value:'', disabled:true},
    lastName:{ value:'', disabled:true},
    phone:{ value:'', disabled:true},
    email:{ value:'', disabled:true},
    address:this.fb.group({
      street:{ value:'', disabled:true},
      state:{ value:'', disabled:true},
      postCode:{ value:'', disabled:true}
    })
  })


  getAMember(id: any){
    this.memberService.getOneMember(id).subscribe(
      detail => {
        this.registrationForm.patchValue(detail)
      console.log(detail)
      },
      error=> alert("sth wrong" + error)
    )
  }



}