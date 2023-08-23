const View  = {
    init(){
        this.render()
    }, 

    render() {
        const hierarchy  =  Store.getState();

        console.log("- [VIEW] Rending Hierarchy...")

        let hierarchyElement = document.getElementById("item-structure");
        hierarchyElement.innerHTML = "";
        showHierarchy(hierarchy["Hierarchy"], hierarchyElement);

        console.log("- [VIEW] Hierarchy loaded...")
        console.log(" ")
    }
}