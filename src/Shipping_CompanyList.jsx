import React, { useState } from "react"
import { Link } from "react-router-dom";
import Shipping_CompanyDataService from "./services/Shipping_CompanyDataService";

const ShippingCompanyList = () => {
    
    const [searchName, setSearchName] = useState("");
    const [shippingCompanys, setShippingCompanys] = useState(Shipping_CompanyDataService.getAll())

    const onChangeSearchName = e =>{
        setSearchName(e.target.value)
    }
    
    const findByName = () => {
        setShippingCompanys(Shipping_CompanyDataService.getById(searchName))
    }

    const deleteShippingCompany = (name) =>{
        if(window.confirm("Deseja Excluir?")){
            Shipping_CompanyDataService.remove(name)
        }
    }
    const removeAllShippingCompanys = () => {
        if(window.confirm("Deseja Excluir?")){
            Shipping_CompanyDataService.removeAll();
            setShippingCompanys(Shipping_CompanyDataService.getAll())
        }
    };
    return (
    <div className ="list row">
        <div className="col-md-10">
            <div className="input-group mb-3">
                <input 
                    type ="text" 
                    value={searchName} 
                    placeholder="Digite Aqui"
                    onChange ={onChangeSearchName} 
                />
                <div className="input-group-append">
                    <button
                        className = "btn btn-outline-secondary"
                        type = "button"
                        onClick = {findByName}
                    >Pesquisar</button>

                </div>
            </div>
        </div>
        <div>
            {
                shippingCompanys &&
                shippingCompanys.map((shipping_companys, index) =>(
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={shipping_companys.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{shipping_companys.name}</h5>
                                        <li>
                                            {shipping_companys.type_car}
                                        </li>
                                        <li>
                                            {shipping_companys.contacts}
                                        </li>
                                        <li>
                                            {shipping_companys.restrict}
                                        </li>
                                    <Link to={"/transportadora/"+ shipping_companys.name}
                                    className = "btn btn-warning">Editar</Link>
                                    <Link onClick = {()=>deleteShippingCompany(shipping_companys.name)} className= "btn btn-danger">Delete</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
        <button
        className ="m-3 btn btn-sm btn-danger" 
        onClick={removeAllShippingCompanys}>
            Remover Tudo
        </button>
       
    </div>     
    );
};

export default ShippingCompanyList;