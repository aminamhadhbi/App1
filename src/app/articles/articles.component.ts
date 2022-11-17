import { Component, OnInit } from '@angular/core';
import {Article} from "../Model/Article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  titre="Les articles du jour";




  listeArticles:Article[]=[
    {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
    {titre:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'Ahmed said',date:'11/11/2018',categorie:'Education'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'} ]

  color='pink';
  changeColor1(){
    this.color='blue';
  }
  changeColor(){

    // @ts-ignore
    if (this.listeArticles[4] === 'Education') {
      return  this.color='blue';  }

    }



  constructor() { }

  ngOnInit() {
  }

}
