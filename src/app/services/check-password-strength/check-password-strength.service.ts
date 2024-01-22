import {Injectable} from '@angular/core'
import {PasswordStrength} from 'src/app/types/password-strength.type'

@Injectable({
    providedIn: 'root'
})
export class CheckPasswordStrengthService {
    check(password: string): PasswordStrength {
        if (password.length === 0) {
            return 'empty'
        } 
        if (password.length < 8) {
            return 'short'
        }
        
        const hasLetters = /\p{L}/u.test(password)
        const hasDigits = /[0-9]/.test(password)
        const hasSymbols = /[^\p{L}0-9]/u.test(password)
        
        if (hasLetters && hasDigits && hasSymbols) {
            return 'strong'
        }
        if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
            return 'medium'
        }
        return 'easy'
    }
}
