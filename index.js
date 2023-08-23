const sudoMain = () => {
    console.log("Starting Application...")

    // Connect Store to Dispatcher
    Dispatcher.register(Store.handleActions.bind(Store))

    // Initialize View
    View.init();

    let addEventListener = (expression, callback, type) => {

        document.addEventListener("click", (event) => {
            if (event.target.matches(expression)) {
                Dispatcher.dispatch(callback(event, type))
                View.init();
            }
        })
    }

    // add event listener to add file icon 
    addEventListener(".add-file-icon", appendItem, "file")

    // add event listener to add folder icon 
    addEventListener(".add-folder-icon", appendItem, "folder")

    // add event listener to delete items
    addEventListener(".delete-item-icon", deleteItem)

    // add event listener to expand and collapse the folder
    addEventListener(".toggle-icon", toggleItem)
}