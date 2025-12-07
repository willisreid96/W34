import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ChartResponse {
  title: string;
  labels: string[];
  data: number[];
  description: string;
}

const API_BASE_URL = 'http://167.172.151.210/api';

@Injectable({
  providedIn: 'root'
})

export class ChartService {
  constructor(private http: HttpClient) {}

  getSummaryChart() {
    return this.http.get<ChartResponse>(`${API_BASE_URL}/charts/summary`);
  }

  getReportsChart() {
    return this.http.get<ChartResponse>(`${API_BASE_URL}/charts/reports`);
  }
}
