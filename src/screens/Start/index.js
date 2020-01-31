import React, { useEffect, useState } from 'react';
import logo from './../../assets/logo.svg';
import './index.css';

import { withRouter } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

import FirebaseService from './../../service';

function Start(props) {

  const [ data, setData ] = useState([])
  let genericNome = "Júlia"

  const saveNew = () => {
    const newid = FirebaseService.pushData('User', {
      email:'israel@email.com',
      nome: 'Israel',
      senha: '123'
    });

    console.log ('salvo', newid)

    fetchData()
  }

  const fetchData = () => {
    FirebaseService.getDataList('User', dataReceived => setData(dataReceived) )
  }

  const navigate = (link) => {
    props.history.push(`${link}`)
  }

  const gotoNew = () => {
    navigate('add-user')
  }

  useEffect (() => {
    //substitui o DidMounth
    //Users nome do banco de dados    
    fetchData()
  }, [])

  //funcao dentro de array, outra forma de fazer a function de cima
  //useEffect( () => fetchData(), [] )

  useEffect (() => {
    console.log(data)
  }, [data])

  return (
    <>
      <h2>Cadastro Firebase</h2>
      <div className="content-add">
        <Button onClick={ gotoNew }> Adicionar Novo </Button>
      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>E-mail</th>
            <th>Nome</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>          
          {
            data.map( ( item, key ) => <tr key={key}>
              <td> { key } </td>
              <td> { item.email} </td>
              <td> { item.nome } </td>
              <td> { item.senha } </td>
              </tr> )
          }
        </tbody>
      </Table>

      
    </>
  );
}

export default withRouter(Start);
