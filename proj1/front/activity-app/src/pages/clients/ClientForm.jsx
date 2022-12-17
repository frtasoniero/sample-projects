import React from 'react';
import Title from './../../components/Title';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function ClientForm() {
    const history = useHistory();
    let { id } = useParams();

    return (
        <>
            <Title title={'Client Detail ' + (id !== undefined ? id : '')}>
                <Button variant='outline-primary' onClick={() => history.goBack()}>
                    <i className="fas fa-arrow-left me-2"></i>
                    Return
                </Button>
            </Title>
        </>
    )
}