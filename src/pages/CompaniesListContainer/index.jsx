import React, {useState, useEffect} from 'react'
import './CompaniesListContainer.css'

const CompaniesListContainer = () => {

  const [branches, setBranches] = useState([]);

  const handleClick = ({ name }) => {
    if (branches.length === 0) {
      setBranches([...branches, name])
    } else {
      let index = branches.indexOf(name)
      if (index > -1) {
        setBranches(branches.filter((branch) => branch != name))
      } else {
        setBranches([ name, ...branches]);
      }
    }


  }

  
  const branchesList = [
    {
      id: 1,
      name: 'Córdoba'
    },
    {
      id: 2,
      name: 'Neuquén'
    },
    {
      id: 3,
      name: 'Capital Federal'
    },
    {
      id: 4,
      name: 'Buenos Aires'
    },
    {
      id: 5,
      name: 'Mar del Plata'
    }
  ];

  return (
    
    <div className='companies-list-container'>
      {branchesList.map((branch) =>
        <div className={(branches.indexOf(branch.name) > -1 ? 'active-card company-card' : 'company-card')} key={branch.id} onClick={() => handleClick(branch)}>
          <h4 className='company-title'>{branch.name}</h4>
        </div> 
      )}

      <div>
        {branches.map((b) => <h6 key={1+b}>{b}</h6> )}
      </div>

      <div className="iframe-container">
        <div>
          <iframe
            src={`http://localhost:4848/single/?appid=C%3A%5CUsers%5Ctadak%5CDocuments%5CQlik%5CSense%5CApps%5CComidas.qvf&obj=DVQagP&select=$::NOMBRE_SUCURSAL,${branches}`}
            /* Buenos%20Aires,C%C3%B3rdoba,Neuqu%C3%A9n */
            className='iFrame' >
            </iframe>
        </div>
      </div>
    </div>
  )
}

export default CompaniesListContainer