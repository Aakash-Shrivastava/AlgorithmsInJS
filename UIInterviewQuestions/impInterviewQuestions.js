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
  
  const getElemById = (elem, searchId) => {
    let searchElement = elem || document.body;
  
    if (searchElement.getAttribute("id") === searchId) {
      return searchElement
    }
    if (elem.nextElementSibling) {
      let sibling = elem.nextElementSibling;
      getElemById(sibling, searchId)
    }
    if (searchElement.childNodes) {
      searchElement.childNodes.forEach(newElem => {
        getElemById(newElem, searchId)
      })
    }
  }
  
  
  let getElemById = (searchId,elem) => {
    let searchElement = elem || document.body;
      console.log(searchElement)
    if (searchElement && searchElement.getAttribute("id") === searchId) {
      return searchElement
    }
    if (searchElement && searchElement.nextElementSibling) {
      let sibling = searchElement.nextElementSibling;
      getElemById(searchId, sibling)
    }
    if (searchElement && searchElement.childNodes) {
      searchElement.childNodes.forEach(newElem => {
        getElemById(searchId, newElem)
      })
    }
  }
  
  
  console.log(getElemById("readme"))