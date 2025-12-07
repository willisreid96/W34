import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { ChartService } from '../../core/chart.service';

Chart.register(...registerables);

@Component({
  standalone: true,
  selector: 'app-summary',
  imports: [CommonModule],
  templateUrl: './summary.html',
  styleUrl: './summary.css'
})
export class SummaryComponent implements AfterViewInit {
  @ViewChild('summaryCanvas') summaryCanvas!: ElementRef<HTMLCanvasElement>;
  description = '';
  title = '';

  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.chartService.getSummaryChart().subscribe({
      next: (res) => {
        this.title = res.title;
        this.description = res.description;

        new Chart(this.summaryCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: res.labels,
          datasets: [
            {
              label: 'Percentage Improvement (%)',
              data: res.data,
              backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
              borderColor: ['#388E3C', '#1976D2', '#F57C00'],
              borderWidth: 2
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
              text: 'Operational Improvements (%)',
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
                text: 'Improvement Percentage',
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
        console.error('Error loading summary chart:', err);
        this.description = 'Failed to load chart data. Please try refreshing the page.';
      }
    });
  }
}
