import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
    value = ''
    sections = {first: 'gray', second: 'gray', third: 'gray'}
    onChange(event: Event) {
        const value = (event.currentTarget as HTMLInputElement).value
        this.value = value

        if (value.length === 0) {
            return this.handleEmptyField()
        }

        if (value.length < 8) {
            return this.handleInvalidLength()
        }

        this.checkStrength(value)
    }

    checkStrength (password: string) {
        const hasLetters = /\p{L}/u.test(password)
        const hasDigits = /[0-9]/.test(password)
        const hasSymbols = /[^\p{L}0-9]/u.test(password)
        
        if (hasLetters && hasDigits && hasSymbols) {
            this.handleStrongPassword()
        } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
            this.handleMediumPassword()
        } else {
            this.handleEasyPassword()
        }
    }

    handleEmptyField() {
        this.sections.first = 'gray'
        this.sections.second = 'gray'
        this.sections.third = 'gray'
    }

    handleInvalidLength () {
        this.sections.first = 'red'
        this.sections.second = 'red'
        this.sections.third = 'red'
    }

    handleEasyPassword() {
        this.sections.first = 'red'
        this.sections.second = 'gray'
        this.sections.third = 'gray'
    }

    handleMediumPassword() {
        this.sections.first = 'yellow'
        this.sections.second = 'yellow'
        this.sections.third = 'gray'
    }

    handleStrongPassword() {
        this.sections.first = 'green'
        this.sections.second = 'green'
        this.sections.third = 'green'
    }
}
