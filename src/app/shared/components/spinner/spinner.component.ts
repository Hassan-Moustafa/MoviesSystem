import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isVisible = false;
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.getSpinnerStatus().subscribe((status: boolean) => this.isVisible = status);
  }

}
