import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { ChartService } from '../../core/chart.service';

Chart.register(...registerables);

@Component({
  standalone: true,
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('reportsCanvas') reportsCanvas!: ElementRef<HTMLCanvasElement>;
  title = '';
  description = '';

  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.chartService.getReportsChart().subscribe({
      next: (res) => {
        this.title = res.title;
        this.description = res.description;

        new Chart(this.reportsCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: res.labels,
          datasets: [
            {
              label: 'Business Impact Metrics',
              data: res.data,
              borderColor: '#00BCD4',
              backgroundColor: 'rgba(0, 188, 212, 0.1)',
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointRadius: 6,
              pointBackgroundColor: '#00BCD4',
              pointBorderColor: '#ffffff',
              pointBorderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              labels: {
                color: '#ffffff',
                font: { size: 14, weight: 'bold' }
              }
            },
            title: {
              display: true,
              text: 'Financial & Operational Impact',
              color: '#ffffff',
              font: { size: 18, weight: 'bold' }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: '#ffffff', font: { size: 12 } },
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              title: {
                display: true,
                text: 'Value',
                color: '#ffffff'
              }
            },
            x: {
              ticks: { color: '#ffffff', font: { size: 12 } },
              grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
          }
        }
      });
      },
      error: (err) => {
        console.error('Error loading reports chart:', err);
        this.description = 'Failed to load chart data. Please try refreshing the page.';
      }
    });
  }
}
