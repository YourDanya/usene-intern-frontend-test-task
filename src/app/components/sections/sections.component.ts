import {Component} from '@angular/core'
import {Input} from '@angular/core'
import {CheckPasswordStrengthService} from 'src/app/services/check-password-strength/check-password-strength.service'
import {PasswordStrength} from 'src/app/types/password-strength.type'

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrl: './sections.styles.sass',
    standalone: true
})
export class SectionsComponent {
    sections = {first: 'gray', second: 'gray', third: 'gray'}
    passwordStrength: PasswordStrength

    constructor(private checkPasswordStrengthService: CheckPasswordStrengthService) {}
    
    @Input()
    set password(password: string) {
        const newPasswordStrength = this.checkPasswordStrengthService.check(password)
        
        if (this.passwordStrength !== newPasswordStrength) {
            this.passwordStrength = newPasswordStrength
            this.updateSectionsColors()
        }
    }

    updateSectionsColors() {
        switch (this.passwordStrength) {
            case 'empty': {
                this.setSections('gray', 'gray', 'gray')
                break
            }
            case 'short': {
                this.setSections('red', 'red', 'red')
                break
            }
            case 'easy': {
                this.setSections('red', 'gray', 'gray')
                break
            }
            case 'medium': {
                this.setSections('yellow', 'yellow', 'gray')
                break
            }
            case 'strong': {
                this.setSections('green', 'green', 'green')
            }
        }
    }

    setSections(first: string, second: string, third: string) {
        this.sections.first = first
        this.sections.second = second
        this.sections.third = third
    }
}