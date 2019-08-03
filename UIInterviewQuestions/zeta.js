let countryMap = {};
let allCountries;

let resultConatiner = document.getElementById("result-container");
let jsonContainer = document.getElementById("json-container");
let inputContainer = document.getElementById("input-container");
let listElements = document.getElementsByClassName("country-list");


window.onload = async function () {
  let { allCountries, countryMap } = await getCountryList()
}

function searchCountryList(event) {
  let inputText = event.target.value.toLowerCase();

  if (inputText !== "" && ((event.keyCode >= 48 && event.keyCode <= 90) || event.keyCode == 8)) {
    while (resultConatiner.firstChild) {
      resultConatiner.removeChild(resultConatiner.firstChild);
    }
    let searchresults = searchList(allCountries, inputText);
    //console.log(searchresults);

    if (searchresults.length > 0) {
      let fragment = document.createDocumentFragment();

      searchresults.forEach((element) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'country-list');
        div.setAttribute('data-code', element.alpha3Code);
        div.setAttribute('onClick', 'countryClicked(event)');
        div.textContent = `${element.name}  ${element.alpha3Code}`
        fragment.appendChild(div);
      })

      resultConatiner.appendChild(fragment)
    } else {
      let fragment = document.createDocumentFragment();

      let div = document.createElement('div');
      div.setAttribute('class', 'country-list');
      div.textContent = `No Results...`
      fragment.appendChild(div);

      resultConatiner.appendChild(fragment)
    }
    listElements[0].classList.add("selected");
  } else if (event.keyCode == 8 && inputText == "") {
    let countrylist = document.querySelectorAll(".country-tag");
    removeInputTag(null, countrylist[countrylist.length - 1].textContent);
    countrylist[countrylist.length - 1].remove();
  }
  else {

    //Code to support keyboard for up and down in list

    let selectedNode = document.querySelector(".country-list.selected");
    if (event.keyCode == 40 && selectedNode) {
      if (selectedNode == listElements[listElements.length - 1]) {
        listElements[0].classList.add("selected");
        listElements[0].scrollIntoView(0);
      } else {

        selectedNode.classList.remove("selected");
        selectedNode.nextElementSibling.classList.add("selected");

        let newSelectedNode = document.querySelector(".country-list.selected");
        newSelectedNode.scrollIntoView(0);
      }
    } else if (event.keyCode == 38 && selectedNode) {
      if (selectedNode == listElements[0]) {
        selectedNode.classList.remove("selected");
        listElements[listElements.length - 1].classList.add("selected");
        document.querySelector(".country-list.selected").scrollIntoView(0);
      } else {
        selectedNode.classList.remove("selected");
        selectedNode.previousElementSibling.classList.add("selected");

        let newSelectedNode = document.querySelector(".country-list.selected");
        newSelectedNode.scrollIntoView(0);
      }
    }
    else if (event.keyCode == 13) {
      let selectedNode = document.querySelector(".country-list.selected");
      countryClicked(null, selectedNode.getAttribute("data-code"))
    } else if (!inputText) {
      while (resultConatiner.firstChild) {
        resultConatiner.removeChild(resultConatiner.firstChild);
      }
    }
  }
}

function countryClicked(event, code) {
  // Adding data to json 
  let dataForJson;

  document.getElementById("countryText").value = "";

  while (resultConatiner.firstChild) {
    resultConatiner.removeChild(resultConatiner.firstChild);
  }

  let countryCode = event ? event.target.getAttribute("data-code") : code;

  if (!document.getElementById(countryCode)) {
    if (jsonContainer.childElementCount > 0) {
      dataForJson = `<br>  <div id="${countryCode}">${JSON.stringify(countryMap[countryCode])}</div>`
    } else {
      dataForJson = `<strong>Countries:</strong>[ <div id="${countryCode}">${JSON.stringify(countryMap[countryCode])}]</div>`
    }

    let div = document.createElement('div');
    // div.setAttribute('class', 'country-list');
    div.innerHTML = dataForJson;
    jsonContainer.appendChild(div);


    // Adding Tag to input
    let inputBox = document.getElementById("countryText");

    let fragment = document.createDocumentFragment();


    let tagSpan = document.createElement('span');
    tagSpan.setAttribute('class', 'country-tag');
    tagSpan.setAttribute('id', countryCode);
    tagSpan.textContent = countryCode;

    let span = document.createElement('span');
    span.setAttribute('class', 'remove');
    span.setAttribute('onClick', 'removeInputTag(event)');
    tagSpan.appendChild(span);
    fragment.appendChild(tagSpan);

    inputContainer.insertBefore(fragment, inputBox)
  }
}

function removeInputTag(event, code) {

  let elementToBeRemoved = event ? event.target.parentElement : document.getElementById(code);

  inputContainer.removeChild(elementToBeRemoved);

  let jsonToRemove = event ? event.target.parentElement.textContent : code;
  document.getElementById(jsonToRemove).remove();
  tags = document.getElementsByClassName('country-tag').length;
  if (tags == 0) {
    jsonContainer.innerHTML = "";
  }
}


function searchList(arr, str) {
  let resultArr = [];
  arr.forEach((element) => {
    if (element.name.toLowerCase().startsWith(str)) {
      resultArr.push(element)
    }
  })

  return resultArr;
}


let getCountryList = function () {
  return new Promise((resolve, reject) => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(function (response) {
        return response.json();
      }).then(function (response) {
        //console.log(response);
        allCountries = response;
        response.forEach((element) => {
          if (!countryMap[element.alpha3Code]) {
            countryMap[element.alpha3Code] = element;
          }
        })
        resolve({
          countryMap,
          allCountries
        })
      })
  })
}