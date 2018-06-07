import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    
  public instrucao: string = 'Traduza a frase:'
  public resposta: string
  
  public frases : Frase[] = FRASES  
  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso : number = 0

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase) 
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{    
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{
    //console.log('Verificar resposta: ', this.resposta)

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução está correta')        
      this.rodada++
      this.progresso += (100 / this.frases.length)      
      this.rodadaFrase = this.frases[this.rodada]
      
    } else{
      alert('A tradução está errada')
    }    
  }
}
