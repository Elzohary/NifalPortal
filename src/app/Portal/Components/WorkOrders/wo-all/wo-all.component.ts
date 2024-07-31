import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { Router } from 'express';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IWosTable } from '../../../Models/iwos-table';
import { woAllTableService } from '../../../Services/WorkOrders/wo-all-table.Service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-wo-all',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatLabel,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,
    MatFormField,
    MatSortModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './wo-all.component.html',
  styleUrl: './wo-all.component.scss'
})
export class WOAllComponent implements OnInit {

  displayedColumns: string[] = ['wo-number', 'wo-address', 'wo-type', 'wo-status', 'wo-progress'];
  dataSource! : MatTableDataSource<IWosTable>;
  toggleValue = '';
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor (private workOrders : woAllTableService, private router : Router) {
  }

  ngOnInit(): void {
    this.getAllTableData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllTableData() {
    this.workOrders.getAllTableData().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToWo(woNumber : string) {
    
  }
}
