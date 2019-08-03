let countryMap = {};
let allCountries;

let resultConatiner = document.getElementById("result-container");
let jsonContainer = document.getElementById("json-container");
let inputContainer = document.getElementById("input-container");

window.onload = async function () {
  let { allCountries, countryMap } = await getCountryList()
}

function searchCountryList(event) {
  let inputText = event.target.value.toLowerCase();

  while (resultConatiner.firstChild) {
    resultConatiner.removeChild(resultConatiner.firstChild);
  }

  if (inputText) {
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
  }
}

function countryClicked(event) {
  // Adding data to json 
  let dataForJson;

  document.getElementById("countryText").value = "";

  while (resultConatiner.firstChild) {
    resultConatiner.removeChild(resultConatiner.firstChild);
  }

  let countryCode = event.target.getAttribute("data-code");
  console.log(countryMap[countryCode]);


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
  tagSpan.textContent = countryCode;

  let span = document.createElement('span');
  span.setAttribute('class', 'remove');
  span.setAttribute('onClick', 'removeInputTag(event)');
  tagSpan.appendChild(span);
  fragment.appendChild(tagSpan);

  inputContainer.insertBefore(fragment, inputBox)

}

function removeInputTag(event) {

  let elementToBeRemoved = event.target.parentElement;

  inputContainer.removeChild(elementToBeRemoved);

  document.getElementById(event.target.parentElement.textContent).remove();
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