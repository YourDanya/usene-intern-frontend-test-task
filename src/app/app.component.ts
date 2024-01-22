import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'
import {SectionsComponent} from 'src/app/components/sections/sections.component'
import {FormBuilder} from '@angular/forms'
import {FormGroup} from '@angular/forms'
import {FormControl} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {PasswordForm} from 'src/app/types/password-form.type'
import {InputComponent} from 'src/app/components/input/input.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SectionsComponent, ReactiveFormsModule, InputComponent],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
    form: FormGroup<PasswordForm>

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            password: new FormControl('', {nonNullable: true})
        })
    }

}
