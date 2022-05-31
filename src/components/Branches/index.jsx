import React, {useState} from 'react'
import './Branches.css'

const Branches = () => {

    const [branches, setBranches] = useState([]);

    const handleClick = ({ name }) => {
        if (branches.length === 0) {
            setBranches([...branches, name])
        } else {
            let index = branches.indexOf(name)
            if (index > -1) {
            setBranches(branches.filter((branch) => branch !== name))
            } else {
            setBranches([ ...branches, name]);
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
    <>
        <div className='branches-list-container'>
        {branchesList.map((branch) =>
            <div className={(branches.indexOf(branch.name) > -1 ? 'active-card branches-card' : 'branches-card')} key={branch.id} onClick={() => handleClick(branch)}>
                <h6 className='branches-title'>{branch.name}</h6>
            </div>
        )}
        </div>
        {branches.length > 0 &&
        < div>
            <h4 className='selected-branches'>{`Sucursales seleccionadas: ${branches}`}</h4>
        </div>
        }

        <div className="iframe-container">
            <div>
                <iframe
                src={`http://localhost:4848/single/?appid=C%3A%5CUsers%5Cmt250056%5COneDrive%20-%20Teradata%5CDocuments%5CQlik%5CSense%5CApps%5CRestaurante.qvf&obj=gdjPXv&opt=ctxmenu,currsel&select=$::NOMBRE_SUCURSAL,${branches}`}
                title='branches'
                className='iframe-branches' >
                </iframe>
            </div>
        </div>
    </>
    )
}

export default Branches