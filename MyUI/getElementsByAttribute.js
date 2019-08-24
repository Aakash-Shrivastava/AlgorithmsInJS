  function getElementsByAttribute(attribute){
    var allElements = document.getElementsByTagName('*'), 
        elm,
        found=[];
    for (var i = 0; i < allElements.length; i++)
     {
      elm = allElements[i];
      if (elm.getAttribute(attribute))
      {
        found.push(elm);
      }
    }
    return found;
  }
   
  