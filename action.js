let id = 3;

const incrementId = () => {
    id += 1
}

const clearInputField = () => {
    document.getElementById("input-item-name").value = ""
}

const appendItem = (event, type) => {
    console.log("- [ACTION] create add action");
    let itemName = document.getElementById("input-item-name").value;
    let itemId = "item-"+id;
    let itemType = type;
    let parentId = event.target.parentNode.parentNode.id;

    clearInputField()
    incrementId()

    return {
        type: 'add-item',
        data: {
            id: itemId,
            name: itemName,
            type: itemType,
            parentId: parentId
        }
    }
}

const deleteItem = (event) => {
    console.log("- [ACTION] create delete action");
    let itemId =  event.target.parentNode.parentNode.id;

    return {
        type: 'delete-item',
        data: {
            id: itemId
        }
    }
}

const toggleItem = (event) => {
    console.log("- [ACTION] toggling item action");
    let itemId = event.target.parentNode.parentNode.id;

    return {
        type: 'toggle-item',
        data: {
            id: itemId
        }
    }
}