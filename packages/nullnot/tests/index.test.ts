import { nn } from '../index';

describe('nullnot', () => {
  it('should return the same value when nothing is null', () => {
    const name = 'samy', email = 'samy@example.net';
    expect(nn`Your name is ${name} and your email is ${email}.`).toBe(`Your name is ${name} and your email is ${email}.`);
  });

  it('should not return anything when something is null', () => {
    const testNothingReturnsWhenSomethingIsNull = (value: unknown) => {
      expect(nn`Your name is ${'samy'} and your email is ${value}.`).toBe('');
    };

    testNothingReturnsWhenSomethingIsNull('');
    testNothingReturnsWhenSomethingIsNull(null);
    testNothingReturnsWhenSomethingIsNull(undefined);
  });

  it('should return if something is 0', () => {
    expect(nn`Your name is ${'samy'} and your bank account balance is ${0}.`).toBe(`Your name is ${'samy'} and your bank account balance is ${0}.`);
  });
});
