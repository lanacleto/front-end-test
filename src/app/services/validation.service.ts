import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  verifyName(name: string): boolean {
    if (!name.trim()) {
      return false;
    }
      const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
  }

  verifyEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailPatternTest = emailPattern.test(email);
    return emailPatternTest;
  }

  verifyPassword(password: string): boolean {
    const hasMinimumLength = password.length >= 6;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isPassOk = hasMinimumLength && hasNumber && hasSpecialChar;
    return isPassOk;
  }
}
