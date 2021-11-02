import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from 'src/app/member';
import { MemberServicesService } from 'src/app/member-services.service';

@Component({
  selector: 'app-reactive-form-create',
  templateUrl: './reactive-form-create.component.html',
  styleUrls: ['./reactive-form-create.component.scss']
})
export class ReactiveFormCreateComponent implements OnInit {

  registrationForm!:FormGroup;

  constructor(private fb:FormBuilder, private memberService:MemberServicesService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
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
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.memberService.createMember(this.registrationForm.value).subscribe(
      response=> alert('Success' + response),
      error =>console.error('Error', error)
    )

    this.registrationForm.reset()
  }

}
