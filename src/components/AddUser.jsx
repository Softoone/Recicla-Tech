import {useState} from 'react'

const AddUser = () => {
    const defaultUser = {
        name: '',
        phone: '',
        email: '',
        password: ''
    }

    const [user,setUser] = useState(defaultUser)
    const [submitted,setSubmitted] = useState(false)

    const handleUserInfo = e => {
        const {name,value} = e.target
        setUser({...user, [name]:value})
    }

    const saveUser = () =>{    
        const info = {
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password
        }

        setSubmitted(true)
    }

    const newUser = () => {
        setUser(defaultUser)
        setSubmitted(false)
    }

    return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newUser}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Usuário</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={user.name}
                  onChange={handleUserInfo}
                  name="name"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={user.phone}
                  onChange={handleUserInfo}
                  name="phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cnpj">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpj"
                  required
                  value={user.email}
                  onChange={handleUserInfo}
                  name="email"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="address">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="address"
                  required
                  value={user.password}
                  onChange={handleUserInfo}
                  name="password"
                />
              </div>
    
              <button onClick={saveUser} className="btn btn-success">
                Cadastrar
              </button>
            </div>
          )}
        </div>
      );
}

export default AddUser