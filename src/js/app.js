import ErrorRepository from './classes/ErrorRepository';

const errors = new ErrorRepository();

errors.add(1, 'This error is already in Error Repository');
errors.add(2, 'This data is not number');
// errors.add(2, 'This data is not string');
errors.add(3, 'This data is not string');
errors.add(4, 'This data already exist');

console.log(errors);
console.log(errors.translate(4));
console.log(errors.translate(5));
