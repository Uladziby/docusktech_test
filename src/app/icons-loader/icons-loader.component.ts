import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icons-loader',
  templateUrl: './icons-loader.component.html',
  styleUrl: './icons-loader.component.css',
  standalone: true,
  imports: [FontAwesomeModule],
})
export class IconsLoaderComponent {
  isDisabled = false;
  delay = 3000;
  icon: icons.IconDefinition = icons.faSortAlphaDown;

  onLoadIcon() {
    this.isDisabled = true;

    setTimeout(() => {
      const iconNames = Object.keys(icons);
      const randomIndex = Math.floor(Math.random() * iconNames.length);

      this.icon = icons[
        iconNames[randomIndex] as keyof typeof icons
      ] as icons.IconDefinition;
      this.isDisabled = false;
    }, this.delay);
  }
}
