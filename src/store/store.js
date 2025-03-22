export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          if (Array.isArray(this.observers[key])) {
            // ✅ undefined 방지
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }

  subscribe(key, cb) {
    if (!Array.isArray(this.observers[key])) {
      this.observers[key] = []; // ✅ 항상 배열로 초기화
    }
    this.observers[key].push(cb);
  }
}
