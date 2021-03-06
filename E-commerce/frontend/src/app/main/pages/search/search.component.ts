import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  verMais: boolean = true
  page: number = 1
  length!: number
  termo!: string

  height: number = 100
  id!: number
  produtos!: Produto[]


  constructor(
    private pservice: ProdutosService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    
    this.route.queryParams.subscribe((res: any) => {

      this.page = 1
      this.verMais = true
      this.height = 100
      this.termo = res.termo

      this.pservice.whereLikePage(this.termo, this.page)
      .subscribe((res: any) => {
        this.produtos = res       
      }) 
    })
   
}


paginacao(): void {
  this.page +=1
  this.height += 50

  this.pservice.whereLikePage(this.termo, this.page)
    .subscribe((res: any) => {  
      
      if(res.length === 0) {
        this.verMais = false
        this.height -= 50
      }
      
      if(res.length >= 4) {
        this.height +=100
      }

      for(let i of res) {
        this.produtos.push(i)
      }
      
  })
}


}
