import ErrorRepository from '../classes/ErrorRepository';

test('add new error', () => {
  const errors = new ErrorRepository();
  errors.add(1, 'This error is already in Error Repository');
  const result = { errors: new Map([[1, 'This error is already in Error Repository']]) };
  expect(errors).toEqual(result);
});

test('add same error', () => {
  expect(() => {
    const errors = new ErrorRepository();
    errors.add(1, 'This error is already in Error Repository');
    errors.add(1, 'This error is already in Error Repository');
  }).toThrow();
});

test('translate code unknown error', () => {
  const errors = new ErrorRepository();
  const result = 'Unknown error';
  expect(errors.translate(1)).toEqual(result);
});
