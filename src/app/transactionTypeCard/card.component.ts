import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PersonData } from '../PersonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class TransactionTypeCard implements OnInit {
  public data: PersonData[] = [];
  public types: Array<string> = [];
  public numbers: Array<number> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequestPerson().subscribe(
      (data) => {
        this.data = data as PersonData[];
        this.types = [...new Set(this.data.map((item) => item.type))].sort();

        for (const type of this.types) {
          this.numbers.push(
            [...new Set(this.data.filter((item) => item.type === type))].length
          );
        }
      },
      (error) => console.error(error)
    );
  }
}
