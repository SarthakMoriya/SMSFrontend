import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpCli: HttpClient) {}

  getData(endpoint: string) {
    return new Promise((resolve, reject) => {
        this.httpCli.get(endpoint)
          .subscribe(
            data => {
              const res = JSON.parse(JSON.stringify(data));
              resolve(res);
            },
            error => {
              console.error('HTTP GET Error:', error);
              reject(error); // Reject promise if an error occurs
            }
          );
      });
  }
}
