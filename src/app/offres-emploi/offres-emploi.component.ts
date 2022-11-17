import { Component, OnInit } from '@angular/core';
import {Emploi} from "../Model/Article";

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi:Emploi[]=[
    {reference: "avd", titre: "dev Java", entreprise: "Meta",  etat:false},
    {reference: "dq", titre: "dev Angular", entreprise: "Microsoft",  etat:true},
    {reference: "avqd", titre: "dev Spring", entreprise: "Amazon",  etat:false}, ]
  ;

  constructor() { }

  ngOnInit() {
  }

}
