import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { TransactionService } from './interfaces/TransactionService';
import { TransactionMockService } from './services/transaction-mock-service';
import { TransactionAPIService } from './services/transaction-api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, RouterLinkActive],
  providers: [{ provide: TransactionService, useClass: TransactionAPIService }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
