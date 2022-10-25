import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function sizeFileValidator(sizeLimit:number = 5): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const value = control.value
    const conversorMBtoByte = 1024*1024

    if(!value)
    return null

    return value.size > sizeLimit*conversorMBtoByte ? {size: true} : null
  }
}

export function typeFileValidator(typeFile:string = 'application/pdf'): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const value = control.value

    if(!value)
    return null

    return value.type != typeFile  ? {type: true} : null
  }
}
