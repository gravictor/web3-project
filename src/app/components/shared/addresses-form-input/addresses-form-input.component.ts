import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addresses-form-input',
  templateUrl: 'addresses-form-input.component.html',
  styleUrls: ['addresses-form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAddressesFormInputComponent {
  @Output() onSubmittedAddresses: EventEmitter<string[]> = new EventEmitter<string[]>();

  form: FormGroup = new FormGroup({
    addresses: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    const fromValue: string = this.form.value.addresses;

    if (fromValue) {
      const parsedArray: string[] = fromValue.split('\n')
        .map((line: string) => line.trim())
        .filter((line: string) => line !== '');
      this.onSubmittedAddresses.emit(parsedArray);
    }
  }
}
