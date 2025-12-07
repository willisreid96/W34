import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ChartResponse {
  title: string;
  labels: string[];
  data: number[];
  description: string;
}

const API_BASE = '/api';

@Injectable({
  providedIn: 'root'
})

export class ChartService {
  constructor(private http: HttpClient) {}

  getSummaryChart() {
    return this.http.get<ChartResponse>(`${API_BASE}/charts/summary`);
  }

  getReportsChart() {
    return this.http.get<ChartResponse>(`${API_BASE}/charts/reports`);
  }
}
