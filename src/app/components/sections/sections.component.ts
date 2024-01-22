import {Component} from '@angular/core'
import {Input} from '@angular/core'
import {CheckPasswordStrengthService} from 'src/app/services/check-password-strength/check-password-strength.service'

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrl: './sections.styles.sass',
    standalone: true
})
export class SectionsComponent {
    sections = {first: 'gray', second: 'gray', third: 'gray'}

    constructor(private checkPasswordStrengthService: CheckPasswordStrengthService) {}

    @Input()
    set password(password: string) {
        if (password.length === 0) {
            this.setSections('gray', 'gray', 'gray')
        } else if (password.length < 8) {
            this.setSections('red', 'red', 'red')
        } else {
            this.checkStrength(password)
        }
    }

    checkStrength(password: string) {
        switch (this.checkPasswordStrengthService.check(password)) {
            case 'strong': {
                this.setSections('green', 'green', 'green')
                break
            }
            case 'medium': {
                this.setSections('yellow', 'yellow', 'gray')
                break
            }
            case 'easy': {
                this.setSections('red', 'gray', 'gray')
            }
        }
    }

    setSections(first: string, second: string, third: string) {
        this.sections.first = first
        this.sections.second = second
        this.sections.third = third
    }
}