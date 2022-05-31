import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  form!: FormGroup;
  result!: any;
  total!: string;

  constructor(private currency: CurrencyService) {}

  ngOnInit() {
    this.form = new FormGroup({
      fromCurrency: new FormControl('UAH'),
      toCurrency: new FormControl('USD'),
      amount: new FormControl('0'),
    });
  }

  submit() {
    this.currency
      .exchange(this.form.value.toCurrency, this.form.value.fromCurrency)
      .subscribe((res) => {
        let arr = Object.values(res);
        this.result = +arr[0] * this.form.value.amount;
        this.total = this.result.toString() + ' ' + this.form.value.toCurrency;
      });
  }
  switch() {
    const to = this.form.get('toCurrency')?.value;
    const from = this.form.get('fromCurrency')?.value;
    this.form.get('fromCurrency')?.patchValue(to);
    this.form.get('toCurrency')?.patchValue(from);

    this.submit();
  }
}
