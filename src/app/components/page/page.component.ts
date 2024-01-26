import { Component } from '@angular/core';
import { UtilService } from '../../services/utils.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.less'
})
export class PageComponent {
  iPack!: any[]

  constructor(
    private utilService: UtilService
  ) {
    this.iPack = utilService.getIconPackages
  }
}
