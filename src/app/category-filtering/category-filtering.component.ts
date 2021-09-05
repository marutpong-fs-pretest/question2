import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-filtering',
  templateUrl: './category-filtering.component.html',
  styleUrls: ['./category-filtering.component.scss']
})
export class CategoryFilteringComponent implements OnInit {


  keyword: string = '';
  data: string[] = [];

  constructor() { }

  get trimmedKeyword(): string {
    return (this.keyword || '').trim();
  }

  get filteredData(): string[] {
    return !this.trimmedKeyword ? this.data : this.data.filter(item => item.toLowerCase().includes(this.trimmedKeyword.toLowerCase()));
  }

  get isEmptyData(): boolean {
    return this.filteredData.length == 0;
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => {
        this.data = data;
      })
  }

}
