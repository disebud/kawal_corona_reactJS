import React , {useState,useEffect} from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { getInfoGlobalDeath, getInfoGlobalHealth, getInfoGlobalPositif, getInfoGlobal } from '../../api/kawalcorona'
import Aux from "../../hoc/_Aux";


const Dashboard = () => {
    const [positif,setPositif] = useState([])
    const [death,setDeath] = useState([])
    const [health,setHealth] = useState([])
    const [listData,setListData] = useState([])
  
    
    useEffect(() => {
      globalDeath();
      globalPositif();
      globalHealth();
      infoGlobal();
  ;
    },[])

    const infoGlobal = () => {
        getInfoGlobal().then((response) => {
            console.log("listData",response);
            console.log("data",response.data);
             setListData(response.data)
        }).catch(err =>{  
            console.log(err)
        })
      }

    const globalPositif = () => {
        getInfoGlobalPositif().then((response) => {
            console.log("Info",response);
            console.log("data",response.data);
             setPositif(response.data)
        }).catch(err =>{  
            console.log(err)
        })
      }
  
      const globalDeath = () => {
        getInfoGlobalDeath().then((response) => {
            console.log("Info",response);
            console.log("data",response.data);
             setDeath(response.data)
            //  var utcDate = new Date(1528137000);
            //  var date = new Date();
            //  alert(date.setUTCMonth(utcDate.getMonth()));
  
        }).catch(err =>{  
            console.log(err)
        })
      }
  
      const globalHealth = () => {
        getInfoGlobalHealth().then((response) => {
            console.log("Info",response);
            console.log("data",response.data);
             setHealth(response.data)
        }).catch(err =>{  
            console.log(err)
        })
      }
  

       
        return (
            <Aux>
                <Row>
                <Col md={12} xl={12}>
                    <Card>
                            <Card.Header>
                                <center><Card.Title as="h5">LIVE DATA GLOBAL</Card.Title></center>
                            </Card.Header>
                        </Card>
                        </Col>
                   
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <i className="fa fa-medkit text-c-red f-36"/>
                                    </div>
                                    <div className="col text-right">
                                        <h5 ><span className="text-muted">{positif.name}</span></h5>
                                        <h3 classname="text-c-warning" >{positif.value}</h3>
                                        <h5 ><span className="text-muted">Jiwa</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        {/* <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>35,098</h6> */}
                                        <div className="progress">
                                            <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '100%', height: '6px'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <i className="fa fa-heart text-c-blue f-36"/>
                                    </div>
                                    <div className="col text-right">
                                        <h5 > <span className="text-muted text-c-blue">{health.name}</span></h5>
                                        <h3 className="text-c-blue">{health.value}</h3>
                                        <h5 > <span className="text-muted text-c-blue">Jiwa</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        {/* <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>34,185</h6> */}
                                        <div className="progress">
                                            <div className="progress-bar progress-c-blue" role="progressbar" style={{width: '190%', height: '6px'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <i className="fa fa-ambulance text-c-red f-36"/>
                                    </div>
                                    <div className="col text-right">
                                        <h5> <span className="text-muted">{death.name}</span></h5>
                                        <h3 className="text-c-red">{death.value}</h3>
                                        <h5 > <span className="text-muted">Jiwa</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-c-red" role="progressbar" style={{width: '100%', height: '6px'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={12}>
                    <Card>
                            <Card.Header>
                                <Card.Title as="h5">INTERNATIONAL COUNTRY DATA : </Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                    <th>NO</th>
                                    {/* <th>ID</th> */}
                                    <th>Negara</th>
                                    <th>Positif</th>
                                    <th>Meninggal</th>
                                    <th>Sembuh</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {listData.map(function (list,index)
                                    {
                                        return (
                                    <tr>
                                        <td data-label="NO">{index + 1}</td>
                                        {/* <td data-label="ID">{list.attributes.OBJECTID}</td> */}
                                        <td data-label="Negara">{list.attributes.Country_Region}</td>
                                        <td data-label="Positif">{list.attributes.Confirmed}</td>
                                        <td data-label="Meninggal" className="text-c-red">{list.attributes.Deaths}</td>
                                        <td data-label="Sembuh" className="text-c-blue">{list.attributes.Recovered}</td>
                                    </tr>
                                     ) 
                                     })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        </Col>
                   
                   
                </Row>
            </Aux>
        );
    
}

export default Dashboard;