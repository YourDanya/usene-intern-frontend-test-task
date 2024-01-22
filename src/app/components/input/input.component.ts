import {Component} from '@angular/core'
import {Input} from '@angular/core'
import {forwardRef} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {ControlValueAccessor} from '@angular/forms'
import {NG_VALUE_ACCESSOR} from '@angular/forms'
import {FormsModule} from '@angular/forms'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrl: './input.styles.sass',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor{
    @Input() value = ''
    @Input() type = ''
    @Input() class = ''

    onChange(event: Event) {
        const {value} = (event.currentTarget as HTMLInputElement)
        this.value = value
        this._onChange(value)
    }

    _onChange(_: string) {}

    writeValue(value: any) {
        this.value = value
    }

    registerOnChange(fn: any) {
        this._onChange = fn
    }

    registerOnTouched() {}
}