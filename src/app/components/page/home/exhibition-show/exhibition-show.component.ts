import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibition-show',
  templateUrl: './exhibition-show.component.html',
  styleUrl: './exhibition-show.component.less'
})
export class ExhibitionShowComponent implements OnInit {
  showcaseModel = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']
  responsiveOptions: any[] | undefined

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
