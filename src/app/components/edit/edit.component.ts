import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/member';
import { MemberServicesService } from 'src/app/member-services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  

  constructor(private memberService:MemberServicesService, private route:ActivatedRoute, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getAMember(this.route.snapshot.paramMap.get('id'))
  }

  registrationForm = this.fb.group({
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

  getAMember(id: any){
    this.memberService.getOneMember(id).subscribe(
      detail => {
        this.registrationForm.patchValue(detail)
      console.log("detail",detail)
      },
      error=> alert("sth wrong" + error)
    )
  }

  onSubmit(){
    this.updateAMember(this.route.snapshot.paramMap.get('id'), this.registrationForm.value);
    this.router.navigate(['/memberlist']);

  }

  updateAMember(id: any, selected: Member){
    this.memberService.updateMember(id, selected).subscribe(
      response => alert("updated" + response.firstName),
      error => alert("sth wrong" + error)
      
      
    )
  }

}
