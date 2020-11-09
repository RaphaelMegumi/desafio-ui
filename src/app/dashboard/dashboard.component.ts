import { BinarioService } from './../binario.service';
import { Binario } from './../binario';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  resultado = null;

  binario: Binario = new Binario();
  submitted = false;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public radarChartLabels: Label[] = ['Comendo', 'Bebendo', 'Dormindo', 'Design', 'Codando', 'Pedalando', 'Correndo'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Dados A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Dados B' }
  ];

  public radarChartType: ChartType = 'radar';

  constructor(private binarioService: BinarioService) {}

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {}

  newBinario(): void {
    this.submitted = false;
    this.binario = new Binario();
  }

  calcular() {
    this.binarioService.calcularBinario(this.binario).subscribe(
      data => {
        this.resultado = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.calcular();
  }

}
