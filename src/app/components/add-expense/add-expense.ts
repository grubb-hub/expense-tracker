import { Component, signal, inject, output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseCategory } from '../../models/expense';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})

export class AddExpense {

  expenseService = inject(ExpenseService);
  showWarning = signal<boolean>(false);

  title: string = '';
  amount: number = 0;
  category: ExpenseCategory = 'Work';

  addExpense() {
    const trimmedTitle = this.title.trim();

    if (!trimmedTitle) {
      this.showWarning.set(true);
      return;
    }

    this.expenseService.addExpense(
      trimmedTitle,
      this.amount || 1,
      this.category
    );

    // reset form
    this.title = '';
    this.amount = 0;
    this.category = 'Work';
    this.showWarning.set(false);
  }
}
