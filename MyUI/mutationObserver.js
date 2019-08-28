var targetNode = document.querySelector("#someElement");
var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true //Omit or set to false to observe only changes to the parent node.
}

var observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);


function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
        switch (mutation.type) {
            case 'childList':
                /* One or more children have been added to and/or removed
                   from the tree; see mutation.addedNodes and
                   mutation.removedNodes */
                break;
            case 'attributes':
                /* An attribute value changed on the element in
                   mutation.target; the attribute name is in
                   mutation.attributeName and its previous value is in
                   mutation.oldValue */
                break;
        }
    });
}