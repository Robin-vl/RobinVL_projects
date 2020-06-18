import { PokemonService } from './../pokemon.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private fb: FormBuilder, private service: PokemonService) {}
  public pokemon: Pokemon = new Pokemon("","","","","");
  public verzPok: Pokemon[] = [];
  public searchBool: boolean = true;
  reactForm = this.fb.group({
    search: [''],
  });
  pokeForm = this.fb.group({
    naam: [''],
    num: ['',[Validators.min(1),Validators.max(807)]],
    type: [''],
  });
  getPok() {
    if (this.reactForm.get('search').value == 'name') {
      this.service.getPokname((this.pokeForm.get('naam').value).toLowerCase( )).subscribe(data => {this.pokemon = data;
      this.searchBool = false;
      this.reactForm.reset();
    this.pokeForm.reset()});
    } else if (this.reactForm.get('search').value == 'numb1') {
      this.service.getPoknum((this.pokeForm.get('num').value).toLowerCase( )).subscribe(data => {this.pokemon = data;
        this.searchBool = false;
        this.reactForm.reset();
        this.pokeForm.reset();});
    } else if (this.reactForm.get('search').value == 'type') {
      this.service.getPoktype((this.pokeForm.get('type').value).toLowerCase( )).subscribe(data => {
        this.searchBool = true;
        this.verzPok = data;
        this.reactForm.reset();
        this.pokeForm.reset();
      })
    }
  }
}
