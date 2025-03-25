import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {

}
