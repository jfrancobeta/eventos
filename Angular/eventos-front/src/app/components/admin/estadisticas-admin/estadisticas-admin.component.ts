import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-estadisticas-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estadisticas-admin.component.html',
})
export class EstadisticasAdminComponent implements OnInit {

  selectedTimeRange: string = '7d';

  stats = [
    { title: 'Usuarios Totales', value: '2,345', description: '+180 desde el último período', icon: 'bi-people' },
    { title: 'Eventos Activos', value: '145', description: '+22 desde el último período', icon: 'bi-calendar-event' },
    { title: 'Ingresos', value: '$12,543', description: '+15% desde el último período', icon: 'bi-currency-dollar' },
    { title: 'Tasa de Conversión', value: '3.2%', description: '+0.5% desde el último período', icon: 'bi-graph-up' },
  ];

  ngOnInit(): void {
    Chart.register(...registerables);
    this.loadCharts();
  }

  loadCharts() {
    const eventChart = new Chart('eventChart', {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Eventos creados',
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Eventos por Día' }
        }
      }
    });

    const userChart = new Chart('userChart', {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Nuevos usuarios',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(153, 102, 255, 1)',
            tension: 0.3,
            fill: false,
            pointBackgroundColor: 'rgba(153, 102, 255, 1)',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Registro de Usuarios' }
        }
      }
    });
  }

}
