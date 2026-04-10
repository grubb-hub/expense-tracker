import { Component, input, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { Expense } from '../../models/expense';
import { ExpenseList } from '../expense-list/expense-list';
import { RouterLink } from '@angular/router';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-expense-item',
  imports: [RouterLink, NgClass],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expense = input.required<{ id: string, title: string; amount: number; category: string }>();
  expenseService = inject(ExpenseService);

  onDeleteTask() {
    this.expenseService.deleteExpense(this.expense().id);
  }

}
