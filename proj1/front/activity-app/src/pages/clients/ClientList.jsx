import React from 'react';
import Title from './../../components/Title';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ClientList() {
    const history = useHistory();
    const [searchString, setSearchString] = useState('');
    
    const handleInputChange = (e) => {
        setSearchString(e.target.value);
    }

    const searchedClients = clients.filter((client) => {
        return (
            Object.values(client)
                  .join(' ')
                  .toLowerCase()
                  .includes(searchString.toLowerCase())
        )
    });

    const newClient = () => {
        history.push('/client/detail');
    }

    return (
        <>
            <Title title='Client List'>
                <Button variant='outline-primary' onClick={newClient}>
                    <i className='fas fa-plus me-2'></i>
                    New Client
                </Button>
            </Title>
            <div class="input-group mt-3 mb-3">
                <span class="input-group-text">Search</span>
                <input type="text" class="form-control" onChange={handleInputChange} placeholder="type a search string" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <table className="table table-striped table-hover">
                <thead className="table-light mt-3">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {searchedClients.map((client) => (
                        <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.name}</td>
                        <td>{client.responsable}</td>
                        <td>{client.phone}</td>
                        <td>{client.status}</td>
                        <td>
                            <div>
                                <button 
                                    className="btn btn-sm btn-outline-primary me-2" 
                                    onClick={() => history.push(`/client/detail/${client.id}`)}>
                                    <i className="fas fa-user-edit me-2"></i>
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger me-2">
                                    <i className="fas fa-user-times me-2"></i>
                                    Disable
                                </button>
                            </div>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

const clients = [
    {
        id: 1,
        name: 'Microsoft',
        responsable: 'James',
        phone: '1 (800) 452-1069',
        status: 'active'
    },
    {
        id: 2,
        name: 'Apple',
        responsable: 'Greg',
        phone: '1 (800) 458-1080',
        status: 'disabled'
    },
    {
        id: 3,
        name: 'Twitter',
        responsable: 'Janine',
        phone: '1 (800) 420-5520',
        status: 'active'
    },
    {
        id: 4,
        name: 'Google',
        responsable: 'Unman',
        phone: '1 (800) 486-9431',
        status: 'active'
    }
]