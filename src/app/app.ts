import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExpenseService } from './services/expense-service';
import { AddExpense } from './components/add-expense/add-expense';
import { ExpenseItem } from './components/expense-item/expense-item';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, AddExpense, ExpenseItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   trackById(index: number, item: any) {
    return item.id;
  }
}
