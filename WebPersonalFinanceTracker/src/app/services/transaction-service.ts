import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private http = inject(HttpClient);

  getTransactions() {
    return this.http.get(
      'http://localhost:5299/api/Transaction/GetTransactions'
    );
  }
}
