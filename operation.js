const addItemToState = (hierarchy, data) => {
    console.log("- [OPERATION] adding item");
    let parentNode = findItem(hierarchy, data.parentId);

    let newChild = {
        id: data.id,
        name: data.name,
        type: data.type,
        parent: data.parentId,
        toggle: false,
        level: parentNode.level + 1,
        child: (data.type == "file") ? null : []
    }

    parentNode.child.push(newChild);

}

const deleteItemFromState = (hierarchy, data) => {
    console.log("- [OPERATION] deleting item");
    let currItem = findItem(hierarchy, data.id)
    let parentItem = findItem(hierarchy, currItem.parent)
    console.log(data.id, currItem.parent)

    for (let i in parentItem.child) {
        if (parentItem.child[i].id == data.id) {
            parentItem.child.splice(i, 1)

            return;
        }
    }
}

const toggleItemFromState = (hierarchy, data) => {
    let currItem = findItem(hierarchy, data.id);
    currItem.toggle = !currItem.toggle;
}

const createItemElement = (id, name, level, type, toggle) => {
   /*  let itemContainer = document.createElement("div")
    itemContainer.setAttribute("style", `padding-left: calc(15px * ${level});`);
    itemContainer.setAttribute("class", "item-container")

    let itemBox = document.createElement("div")
    itemBox.setAttribute("class", "item")
    itemBox.setAttribute("id", `${id}`)

    let toggleButton = document.createElement("span")
    toggleButton.setAttribute("class", "toggle-icon") */

    let resultElement =
        `<div style="padding-left: calc(15px * ${level});" class="item-container">
        <div class="item" id="${id}">`


    if (toggle)
        resultElement += `<span><img class="toggle-icon icon rotate" src="static/expand-collpse.png" alt=""></span>`
    else
        resultElement += `<span><img class="toggle-icon icon normal" src="static/expand-collpse.png" alt=""></span>`


    resultElement += `<span class="item-name">${name}</span>
            <span class="item-update-options"> `

    if (type == 'folder')
        resultElement += `<img class="add-file-icon icon" src="static/addFile.png" alt="">
                        <img class="add-folder-icon icon" src="static/addFolder.png" alt="">`

    resultElement +=
        `<img class="delete-item-icon icon" src="static/delete.png" alt="">
            </span>
        </div>
    </div>
    `
    return resultElement;
}

const showHierarchy = (hierarchy, hierarchyElement) => {
    if (hierarchy == null || hierarchy == []) {
        return;
    }

    hierarchyElement.innerHTML += createItemElement(hierarchy.id, hierarchy.name, hierarchy.level, hierarchy.type, hierarchy.toggle)

    if (hierarchy.child == null) {
        return;
    }

    if (hierarchy.toggle == false) return;
    for (let item of hierarchy.child) {
        showHierarchy(item, hierarchyElement);
    }
}

const findItem = (hierarchy, itemId) => {
    if (hierarchy == null)
        return null;

    if (hierarchy.id == itemId)
        return hierarchy;

    if (hierarchy.child == null)
        return null;

    for (let item of hierarchy.child) {
        let result = findItem(item, itemId);
        if (result) {
            return result;
        }
    }
    return null;
}

