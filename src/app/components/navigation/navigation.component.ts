import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Output()
  darkModeSwitched = new EventEmitter<boolean>(false);

  isPinned: boolean = true;

  onDarkModeSwitched(event: MatSlideToggleChange): void {
    this.darkModeSwitched.emit(event.checked);
  }

  pin(): void {
    this.isPinned = !this.isPinned;
  }
}
