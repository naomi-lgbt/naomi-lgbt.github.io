import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  /**
   * Removes the file extension from a file name.
   */
  public static parseFileName(fileName: string): string {
    return fileName.split('.')[0];
  }
  /**
   * Designed to sort strings that are in the `Naomi123` format.
   */
  public static numericSort(a: string, b: string): number {
    const aString = a.replace(/\d/g, '');
    const bString = b.replace(/\d/g, '');
    if (aString !== bString) {
      return aString.localeCompare(bString);
    }
    const aNumber = parseInt(a.replace(/\D/g, ''));
    const bNumber = parseInt(b.replace(/\D/g, ''));
    return aNumber - bNumber;
  }
  /**
   * Designed to sort strings that are in the `Naomi-123` format.
   */
  public static numericSortWithHyphen(a: string, b: string): number {
    const [aString, aNumber] = a.split('-');
    const [bString, bNumber] = b.split('-');
    if (aString !== bString) {
      return aString.localeCompare(bString);
    }
    // if number is not defined, it should come first.
    if (!aNumber) {
      return -1;
    }
    if (!bNumber) {
      return 1;
    }
    return parseInt(aNumber) - parseInt(bNumber);
  }
}
