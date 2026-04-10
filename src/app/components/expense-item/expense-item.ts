import { Component, input, inject, computed } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { Expense } from '../../models/expense';
import { ExpenseList } from '../expense-list/expense-list';
import { RouterLink } from '@angular/router';
import { bufferToggle } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})

export class ExpenseItem {
  expense = input.required<Expense>();
  expenseService = inject(ExpenseService);

  isHighExpense = computed(() => this.expense().amount > 100);

categoryColor = computed(() => {
  const map: Record<string, string> = {
    Work: '#0d6efd',
    Personal: '#6c757d',
    Grocery: '#dc3545',
    Utilities: '#198754',
    Shopping: '#ffc107',
    Travel: '#0dcaf0',
    Food: '#fd7e14'
  };
  return map[this.expense().category] ?? '#212529';
});

  onDeleteTask() {
    this.expenseService.deleteExpense(this.expense().id);
  }

}
