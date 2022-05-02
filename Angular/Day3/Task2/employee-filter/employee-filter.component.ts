import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-filter-salary',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css'],
})
export class EmpFilterSalaryComponent {
  min: number = 0;
  max: number = 1000;
  tempMin: number = 0;
  tempMax: number = 1000;
  empArray: any[] = [
    {
      empNo: 123,
      empName: 'Prachi',
      empEmail: 'prachi@yahoo.com',
      empGender: 'M',
      empGrade: 1,
      empSalary: 90,
    },
    {
      empNo: 124,
      empName: 'Reshmi',
      empEmail: 'reshmi@yahoo.com',
      empGender: 'F',
      empGrade: 2,
      empSalary: 76,
    },
    {
      empNo: 125,
      empName: 'Yadav',
      empEmail: 'Y@Gmail.com',
      empGender: 'M',
      empGrade: 3,
      empSalary: 50,
    },
    {
      empNo: 126,
      empName: 'Priya',
      empEmail: 'P@Gmail.com',
      empGender: 'F',
      empGrade: 1,
      empSalary: 800,
    },
    {
      empNo: 127,
      empName: 'Raj',
      empEmail: 'S@Gmail.com',
      empGender: 'M',
      empGrade: 2,
      empSalary: 150,
    },
    {
      empNo: 128,
      empName: 'Jain',
      empEmail: 'J@Gmail.com',
      empGender: 'F',
      empGrade: 1,
      empSalary: 44,
    },
    {
      empNo: 129,
      empName: 'Komal',
      empEmail: 'Kwap@Gmail.com',
      empGender: 'F',
      empGrade: 3,
      empSalary: 83,
    },
    {
      empNo: 130,
      empName: 'Rishika',
      empEmail: 'Ris@Gmail.com',
      empGender: 'F',
      empGrade: 2,
      empSalary: 10,
    },
    {
      empNo: 131,
      empName: 'Kunal',
      empEmail: 'K@Gmail.com',
      empGender: 'M',
      empGrade: 3,
      empSalary: 675,
    },
    {
      empNo: 132,
      empName: 'Akshay',
      empEmail: 'Akshay@Gmail.com',
      empGender: 'M',
      empGrade: 1,
      empSalary: 555,
    },
  ];

  manualFilter_click() {
    this.min = this.tempMin;
    this.max = this.tempMax;
  }
}
