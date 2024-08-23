export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(code, description) {
    if (this.errors.has(code)) {
      throw new Error(this.translate(1));
    }
    this.errors.set(code, description);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
