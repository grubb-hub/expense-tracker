import { Component, input, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-item',
  imports: [],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expense = input.required<{ id: string, title: string; amount: number; category: string }>();
  expenseService = inject(ExpenseService);

}
