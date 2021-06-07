let REGISTER_SHIPPING = [
    {name: "Marcos", contacts: "(71) 9 9900-9900", type_car: "Caminhonete", restrict: "1000kg"},
    {name: "Algusto", contacts: "(71) 9 9900-9900", type_car: "Caminhão", restrict: "5000kg"},
    {name: "Rafael", contacts: "(71) 9 9900-9900", type_car: "Caminhão", restrict: "4000kg"}
]


const getAll = () =>{
    return REGISTER_SHIPPING
}
const getById = (name) =>{
    if(name === "") return REGISTER_SHIPPING
    let filtrado = REGISTER_SHIPPING.filter((obj) => obj.name.includes(name))
    return filtrado
}
export const create = (data) => {
    return REGISTER_SHIPPING.push(data);
};
const update = (name, data) => {
    REGISTER_SHIPPING.forEach(item =>{
        if(item.name === name){
            item.name = data.name
            item.contacts = data.contacts
            item.type_car = data.type_car
            item.restrict = data.restrict
        }
    });
    return
};
const remove = (name) =>{
    return REGISTER_SHIPPING.splice(REGISTER_SHIPPING.indexOf(name), 1);
};
const removeAll = () =>{
    REGISTER_SHIPPING=[]
}

export default {
    getAll,
    getById,
    remove,
    removeAll,
    update
}