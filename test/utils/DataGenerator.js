// utils/DataGenerator.js

import { faker } from '@faker-js/faker';

export class DataGenerator {
    static generateUsername() {
        return faker.internet.username();
    }

    static generateEmail() {
        return faker.internet.email();
    }

    static generatePassword() {
        return faker.internet.password();
    }

    static generateFirstName(length) {
        const name = faker.person.firstName().replace(/[^a-z]/gi, '');
        if (length) {
            return name.slice(0, length);
        }
        return name;
    }

    static generateLastName(length) {
        const name = faker.person.lastName().replace(/[^a-z]/gi, '');
        if (length) {
            return name.slice(0, length);
        }
        return name;
    }

    static generateFullName() {
        const firstName = this.generateFirstName();
        const lastName = this.generateLastName();
        return `${firstName} ${lastName}`;
    }

    static generatePhoneNumber() {
        return faker.phone.number();
    }

    static generateAddress() {
        return {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
            zipCode: faker.location.zipCode(),
        };
    }

    static generateCompanyName() {
        return faker.company.name();
    }

    static generateJobTitle() {
        return faker.person.jobTitle();
    }

    static generateCreditCardNumber() {
        return faker.finance.creditCardNumber();
    }

    static generateFutureDate() {
        return faker.date.future();
    }

    static generatePastDate() {
        return faker.date.past();
    }

    static generateRandomNumber(min, max) {
        return faker.number.int({ min, max });
    }

    /**
     * Generates a random number with the specified number of digits.
     * @param {number} length - The number of digits in the generated number
     * @returns {number} A random number with the specified number of digits
     * @example
     * Generate a random 8-digit number
     * const randomEightDigitNumber = DataGenerator.generateRandomNumberOfLength(8);
     * console.log(randomEightDigitNumber); // Outputs a number like 12345678
     */
    static generateRandomNumberOfLength(length) {
        if (length <= 0) {
            throw new Error('Length must be a positive integer');
        }
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        return faker.number.int({ min, max });
    }

    static generateColor() {
        return faker.color.human();
    }

    static generateImageUrl() {
        return faker.image.url();
    }
}

export default DataGenerator;
