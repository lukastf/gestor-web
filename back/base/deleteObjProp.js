

const deleteObjProp = (prop, miau, obj) => {

    if (
        prop === "" || 
        prop === "undefined" || 
        typeof prop === "undefined"
    ) {
        delete obj[miau];
    }

    return obj;
}

module.exports = deleteObjProp;