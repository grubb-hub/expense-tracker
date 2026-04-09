import { Component, signal, inject, output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseCategory } from '../../models/expense';

@Component({
  selector: 'app-add-expense',
  imports: [RouterLink],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})

export class AddExpense {
  expenseService = inject(ExpenseService);
  showWarning = signal<boolean>(false); // signal to manage inline warning

  constructor() {}

  // Updated to accept amount and category
  onCreateExpense(
    expenseInput: HTMLInputElement,
    amountInput: HTMLInputElement,
    categorySelect: HTMLSelectElement
  ) {
    const title = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value) || 1; // default 1 if empty
    const category = categorySelect.value as ExpenseCategory;

    if (!title) {
      this.showWarning.set(true); // show inline warning
      return;
    }

    // Add the new expense
    this.expenseService.addExpense(title, amount, category);

    // Reset the input fields
    expenseInput.value = '';
    amountInput.value = '';
    categorySelect.value = 'Work'; // default category
    this.showWarning.set(false);
  }
}
