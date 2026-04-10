import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseItem } from '../expense-item/expense-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseItem, CommonModule],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
 expenseService = inject(ExpenseService);

}
