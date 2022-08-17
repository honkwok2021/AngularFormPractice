import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }
  listProduct!: any[]
  ngOnInit(): void {
    this.listProduct=[
      {id:1, title:"T1", price: 18, qte:0, like:0},
      {id:2, title:"T2", price: 10, qte:10, like:0},
      {id:3, title:"T3", price: 2, qte:8, like:0}
    ]

    this.buyproduct(2)
  }

  buyproduct(i:number){
    this.listProduct[i].qte--;
    console.log('this id then qte', this.listProduct[i],this.listProduct[i].qte)

  }

}
