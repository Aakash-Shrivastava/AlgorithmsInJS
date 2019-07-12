const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(func.apply(context, args), delay)
    }
  }
  
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
  