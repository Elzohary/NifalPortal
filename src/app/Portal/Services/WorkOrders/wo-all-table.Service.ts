import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development'; 
import { IWosTable } from '../../Models/iwos-table';

@Injectable({
  providedIn: 'root'
})
export class woAllTableService {

  constructor(private httpClient : HttpClient) { 
  }

  getAllTableData() : Observable<IWosTable[]> {
    return this.httpClient.get<IWosTable[]>(environment.apiUrl+'WorkOrders/woTableData')
  }

}

