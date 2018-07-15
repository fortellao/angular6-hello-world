import { AbstractControl, ValidationErrors, FormGroup, FormControl } from "@angular/forms";

export class ChangePasswordValidators {
    static passwordsMustMatch(control: FormGroup): ValidationErrors | void {
        let repeatPassword: FormControl = (control.get('repeatPassword') as FormControl);
        let newPassword: FormControl = (control.get('newPassword') as FormControl);
        
        if (repeatPassword.value !== newPassword.value) {
            return {passwordsMustMatch: true}
        }
        else {
            return null;
        }
    }

    static oldPasswordMustMatch(control: FormControl): Promise<ValidationErrors> | void {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("timeout. prroccessing")
                if (control.value !== 'hola') {
                    console.log("bad password");
                    resolve({oldPasswordIncorrect: true}); 
                }
                else {
                    console.log("pass ok");
                    resolve(null);
                }
            }, 3000 );  
        });
    }
}