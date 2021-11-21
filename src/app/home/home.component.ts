import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TotalData } from '../TotalData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'SolidBranchRecrut';

  public total: TotalData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequestNumber().subscribe(
      (data) => {
        this.total = data as TotalData[];
      },
      (error) => console.error(error)
    );
  }
}
