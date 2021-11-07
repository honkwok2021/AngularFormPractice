import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  form!: FormGroup;
  
  title!: string;

  constructor(private dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.form=this.fb.group({
      firstName:[this.data.mem.firstName],
      lastName:[this.data.mem.lastName],
      phone:[this.data.mem.phone],
      email:[this.data.mem.email]
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
