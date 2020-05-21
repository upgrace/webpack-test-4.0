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
