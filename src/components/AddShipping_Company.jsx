import React, { useState } from "react"
import Shipping_CompanyDataService, { create } from "../services/Shipping_CompanyDataService"

const AddShipping_Company = () =>{
    const initialShippingCompanyState = {
        name: "",
        contacts: "",
        type_car: "",
        restrict: "",
    }

    const [shipping_Company, setShippingCompany] = useState(initialShippingCompanyState)
    const [submitted, setSubmmitted] = useState(false)


    const handleInputChange = event =>{
        const {name, value } = event.target;
        setShippingCompany({...shipping_Company, [name]: value});
    };

    const saveShippingCompany = () =>{
        const data = {
            name : shipping_Company.name,
            contacts: shipping_Company.contacts,
            type_car: shipping_Company.type_car,
            restrict: shipping_Company.restrict,
        }
        create(data)
        setSubmmitted(true)
    };

    const newShippingCompany = () =>{
        setShippingCompany(initialShippingCompanyState);
        setSubmmitted(false)
    };
    
    return(
        <div className="submit-form">
            {submitted ?(
                <div>
                    <h4>Cadastro Realizado com Sucesso!</h4>
                    <button className="btn btn-success" onClick={newShippingCompany}>Adicionar</button>
                </div>
            ) : ( 
                <div>
                    <div className = "form-group">
                        <label htmlFor = "name">Transportadora</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        id="name" 
                        required 
                        value={shipping_Company.name} 
                        onChange={handleInputChange} 
                        name = "name"
                        />
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "name">Contatos</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        id="contacts" 
                        required 
                        value={shipping_Company.contacts} 
                        onChange={handleInputChange} 
                        name = "contacts"
                        />
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "name">Tipo do Carro</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        id="type_car" 
                        required 
                        value={shipping_Company.type_car} 
                        onChange={handleInputChange} 
                        name = "type_car"
                        />
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "name">Retricões</label>
                        <input className="form-control" 
                        type="text" 
                        id="restrict" 
                        required 
                        value={shipping_Company.restrict} 
                        placeholder="Ex: 1000Kg / Não Transporto Baterias"
                        onChange={handleInputChange} 
                        name = "restrict"
                        />
                    </div>
                    <button onClick={saveShippingCompany} className = "mt-3 btn btn-success">
                        Enviar
                    </button>
                </div>
            )}
        </div>
    );
       
};

export default AddShipping_Company