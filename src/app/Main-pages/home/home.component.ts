import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // controlsList: ControlData[] = [];
  list = ([] = []);

  keys: string[] = [];
  values: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // Get data from API
    this.homeService.getData().subscribe((data: any) => {
      console.log(data.response);
      this.list = data.response;
      this.list.forEach((element: any) => {
        if (element.unit === 'boolean') {
          element.choices = ['Yes', 'No'];
          if (element.value === '1') element.newValue = 'Yes';
          else if (element.value === '0') element.newValue = 'No';
        }
        if (element.unit === 'dropdown') {
          element.choices = ['map', 'toc', 'route'];
        }
      });
      // GoupBy mathod call and map values push into array
      const grouped = this.groupBy(this.list, (item: any) => item.section);
      grouped.forEach((never: [], key: string) => {
        this.keys.push(key);
        console.log(never);
        this.values.push(never);
        console.log(this.values);
      });
    });
  }
  // GroupBy method made to map(key,value)
  groupBy(list: any, keyGetter: any) {
    const map = new Map();
    list.forEach((item: any) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
  // On Submit changed data show on console
  submit(data: any) {
    console.log(data);
  }
}
