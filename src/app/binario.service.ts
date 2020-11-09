import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Binario } from './binario';

@Injectable({
  providedIn: 'root'
})
export class BinarioService {
  url = 'http://localhost:8080/calcular';

  constructor(private http: HttpClient) { }

  calcularBinario(binario: Binario){
    return this.http.post(`${this.url}`, binario, {responseType: 'text'});
  }

}
