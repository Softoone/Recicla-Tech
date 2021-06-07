import React, { useState } from "react"
import { Link } from "react-router-dom";
import Shipping_CompanyDataService from "../services/Shipping_CompanyDataService";

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
        <div className="m-3 col-md-10">
            <div className="input-group mb-3 justify-content-center" >
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
        <div className="row">
            {
                shippingCompanys &&
                shippingCompanys.map((shipping_companys, index) =>(
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">{shipping_companys.name}</h5>
                                        <li>
                                            Contato: {shipping_companys.contacts}
                                            
                                        </li>
                                        <li>
                                            Tipo de Veiculo: {shipping_companys.type_car}
                                        </li>
                                        <li>
                                            Restrições: {shipping_companys.restrict}
                                        </li>
                           
                                        <Link to={"/transportadora/"+ shipping_companys.name}
                                        className = "btn btn-warning">Editar</Link>
                                        <Link onClick = {()=>deleteShippingCompany(shipping_companys.name)} className= "m-3 btn btn-danger">Delete</Link>
                                    
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