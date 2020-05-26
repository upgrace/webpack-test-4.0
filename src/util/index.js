export const throttle = function (fn, wait) {
  return function () {
    const cxt = this
    const args = arguments
    if (!timer.throttle) {
      timer.throttle = setTimeout(() => {
        fn.apply(cxt, args)
        timer.throttle = null
      }, wait)
    }
  }
}

const timer = {
  throttle: null,
  debounce: null
}

export const debounce = function (fn, wait) {
  clearTimeout(timer.debounce)

  return function () {
    const cxt = this
    const args = arguments
    timer.debounce = setTimeout(() => {
      fn.apply(cxt, args)
      timer.debounce = null
    }, wait)
  }
}

export class NewPromise {
  constructor (fn) {
    this.states = { pending: 'PENDING', resolve: 'RESOLVE', reject: 'REJECT' }
    this.state = this.states.pending
    this.resolveCallBack = []
    this.rejectCallBack = []

    try {
      fn && fn(this.resolve, this.reject)
    } catch (res) {
      this.then(null, this.reject('初始化错误'))
    }
  }

  then (resolve, reject) {
    if (this.state === this.states.resolve) {
      this.resolveCallBack.push(resolve)
    }

    if (this.state === this.states.reject) {
      this.rejectCallBack.push(reject)
    }

    return new NewPromise(function () {})
  }

  catch (reject) {
    return this.then(null, reject)
  }

  _fullfilled () {}

  _rejected () {}

  resolve (value) {
    if (this.state === this.states.pending) {
      this.state = this.states.resolve
    }

    return this.then(value, null)
  }

  reject (value) {
    if (this.state === this.states.pending) {
      this.state = this.states.reject
    }

    return this.then(null, value)
  }

  static resolve () {
    // NewPromise._self.currentState = NewPromise._self.resolve

  }

  static reject () {

  }

  static all () {}

  static race () {}
}
