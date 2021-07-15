import { from } from "rxjs";
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  formData: PaymentDetail = new PaymentDetail();

  list: PaymentDetail[];

  readonly baseUrl = 'http://localhost:30130/api/PaymentDetail'

  postPaymentDetail() {

    return this.http.post(this.baseUrl, this.formData);
  }

  putPaymentDetail() {

    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailsId}`, this.formData);
  }

  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[])
  }
}
