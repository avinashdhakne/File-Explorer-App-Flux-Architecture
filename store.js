const Store = {
    state: {
        Hierarchy: {
            id: "item-0",
            name: "root",
            type: "folder",
            parent: null,
            toggle: false,
            level: 0,
            child: [
                {
                    id: "item-1",
                    name: "folder-1",
                    type: "folder",
                    parent: "item-0",
                    level: 1,
                    toggle: false,
                    child: []
                },
                {
                    id: "item-2",
                    name: "file-1",
                    type: "file",
                    parent: "item-0",
                    level: 1,
                    toggle: false,
                    child: null
                }
            ]
        }
    },

    getState() {
        return this.state;
    },

    handleActions(action) {
        let hierarchy = Store.getState()
        if (action.type == "add-item") {
            addItemToState(hierarchy["Hierarchy"], action.data);
            this.emitChange(action.type);
        }
        else if (action.type == "delete-item") {
            deleteItemFromState(hierarchy["Hierarchy"], action.data);
            this.emitChange(action.type);
        }
        else if (action.type == "toggle-item") {
            toggleItemFromState(hierarchy["Hierarchy"], action.data);
            this.emitChange(action.type);
        }
        else {
            console.log("ERROR: Unidentified Action");
        }
    },

    emitChange(actionType) {
        console.log("- [LOG] Successful", actionType)
    }
}