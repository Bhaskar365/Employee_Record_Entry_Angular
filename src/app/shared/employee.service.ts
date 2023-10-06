import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation, Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  employeeUrl:string = "http://localhost:5244/api/employee";
  designationUrl:string = "http://localhost:5244/api/designation";
  listEmployee:Employee[]=[];     // for getting data employee list
  listDesignation:Designation[]=[];

  employeeData:Employee = new Employee();    // for post data / insert data

  saveEmployee()
  {
    return this.http.post(this.employeeUrl,this.employeeData);
  }

  updateEmployee()
  {
    return this.http.put(`${this.employeeUrl}/${this.employeeData.id}`, this.employeeData);
  }

  getEmployees():Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.employeeUrl);
  }

  getDesignations():Observable<Designation[]>
  {
    return this.http.get<Designation[]>(this.designationUrl);
  }

  deleteEmployee(id:number)
  {
    return this.http.delete(`${this.employeeUrl}/${id}`);
  }

}


