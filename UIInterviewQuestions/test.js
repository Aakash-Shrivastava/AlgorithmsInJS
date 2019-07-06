let commentDivs = document.querySelectorAll("div.comment-list")

let arrayOfDivs = Array.from(commentDivs)

let count = null, commentResponse = null;


arrayOfDivs.forEach((divElement, index) => {
    divElement.setAttribute("id", index);

    count = +divElement.attributes["data-count"].value;

    var commentItemElement, commentItemUserName, commentItemUserMessage;

    for (i = 0; i < count; i++) {
        commentItemElement = document.createElement("div");
        commentItemElement.setAttribute("class", "comment-item");


        commentItemUserName = document.createElement("div");
        commentItemUserName.setAttribute("class", "comment-item__username");
        commentItemUserName.textContent = "Loading...";


        commentItemUserMessage = document.createElement("div");
        commentItemUserMessage.setAttribute("class", "comment-item__message");
        commentItemUserMessage.textContent = "Loading...";


        commentItemElement.appendChild(commentItemUserName)
        commentItemElement.appendChild(commentItemUserMessage);
        divElement.appendChild(commentItemElement);

    }
});


arrayOfDivs.forEach((divElement, index) => {
    count = +divElement.attributes["data-count"].value;
    commentResponse = getUserComments(count);

    for (var key in commentResponse) {
        if (commentResponse.hasOwnProperty(key)) {

            let divElem = document.getElementById(index);

            divElem.children[+key].children[0].textContent = commentResponse[key].username;
            divElem.children[+key].children[1].textContent = commentResponse[key].message;
        }
    }
})



function getUserComments(count) {
    fetch(`https://www.example.com/comments?count=${count}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        })
        .catch(error => {
            console.error('Error:', error);
            return {};
        });
}







'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        console.log(U,N)
        
        const requests = [
            getLikedBrands(U.id),
            getTopBrandsForGender(U.gender)
        ];
        
        Promise.all(requests)
        .then((values) => {
            console.log("Entered Values",values)
            let getLikedBrandsById = values[0];
            let getTopBrandsForGender = values[1];
            
            if(getLikedBrandsById.length + getTopBrandsForGender.length < N){
                console.log("ABount to reject")
                reject(new Error("Not enough data"))
            }
            let resultArray = [],j=0,k=0;
            for(i=0; i<N; i++){
                if(getLikedBrandsById[j] && resultArray.indexOf(getLikedBrandsById[j].name)<0){
                    resultArray.push(getLikedBrandsById[j].name);
                    j++;
                }else if(getTopBrandsForGender[k] && resultArray.indexOf(getTopBrandsForGender[k].name)<0) {
                    resultArray.push(getTopBrandsForGender[k].name);
                    k++;
                }
            }
            console.log("Result",resultArray);
            resolve(resultArray);
        })
        .catch(function(err) {
              return new Error("Not enough data")
        });

    });
}