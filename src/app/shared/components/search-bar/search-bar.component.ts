import { Component, OnInit, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SearchBarComponent),
        multi: true
    }
  ]
})
export class SearchBarComponent implements ControlValueAccessor {

  value: string;
  @Input() placeholder: string = '';
  @Input() inputMaxLength: number = 30;
  @Output() onSearch = new EventEmitter<string>();
  @Output() change = new EventEmitter<string>();

  set inputValue(value) {
    if( value && this.value !== value){
        this.value = value
        this.onChange(value)
        this.change.emit(value);
    }
  }

  get inputValue() {
    return this.value;
  }

  private onChange;

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    this.inputValue = value;
  }

  search() {
    this.onSearch.emit(this.value);
  }

}
