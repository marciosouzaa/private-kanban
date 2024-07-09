import { v4 as uuidv4, validate } from 'uuid';

export class Guid {
  /**
 * Ensures the value is a valid GUID
 * @param value string value
 */
  static validate(value: string): boolean {
    return validate(value);
  }

  static generate(): string {
    return uuidv4();
  }
}