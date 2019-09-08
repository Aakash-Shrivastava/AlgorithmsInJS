// "execute this function only if 100 milliseconds have passed without it being called."

const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(func.apply(context, args), delay)
    }
  }


// "execute this function at most once every 100 milliseconds."
  
  const throttle = (func, limit) => {
    let inThrottle = true;
    return function () {
      const context = this;
      const args = arguments;
      if (inThrottle) {
        func.apply(context, args);
        inThrottle = false;
        setTimeout(() => inThrottle = true, limit)
      }
    }
  }
  