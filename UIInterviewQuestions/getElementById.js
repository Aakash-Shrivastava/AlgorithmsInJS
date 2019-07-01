const getElemById = (searchId,elem = document.body) => {
  
    if (elem instanceof HTMLElement && elem.getAttribute("id") === searchId) {
      console.log(elem);
    }
    if (elem.children) {
      Array.from( elem.children).forEach(newElem => {
        getElemById(searchId,newElem)
      })
    }
  }
  
getElemById("myNumber");