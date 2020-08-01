import React , {useState,useEffect} from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import {getInfoIndonesia, getInfoProvinsi} from '../../api/kawalcorona'
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

const DashboardIndo = () => {
   
    const [indonesia,setIndonesia] = useState([])
    const [list,setList] = useState([])
    const [provinsi,setProvinsi]=useState([])
  
    
    useEffect(() => {
      infoIndonesia();
      infoProvinsi();
    },[])
  
      const infoIndonesia = () => {
        getInfoIndonesia().then((response) => {
            console.log("Info",response);
            console.log("data",response.data);
             setIndonesia(response.data)
        }).catch(err =>{  
            console.log(err)
        })
      }

      const infoProvinsi = () => {
        getInfoProvinsi().then((response) => {
            console.log("list",response);
            console.log("data",response.data);
             setProvinsi(response.data)
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
                                <center><Card.Title as="h5">LIVE DATA INDONESIA</Card.Title></center>
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
                                        <h5 > <span className="text-muted">Total Positif</span></h5>
                                        <h3>{indonesia.map(indo =>(indo.positif))}</h3>
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
                                        <h5 ><span className="text-muted">Total Sembuh</span></h5>
                                        <h3 className="text-c-blue">{indonesia.map(indo =>(indo.sembuh))}</h3>
                                        <h5 > <span className="text-muted ">Jiwa</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-12">
                                        {/* <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>34,185</h6> */}
                                        <div className="progress">
                                            <div className="progress-bar progress-c-blue" role="progressbar" style={{width: '100%', height: '6px'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
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
                                        <h5 > <span className="text-muted">Total Meninggal</span></h5>
                                        <h3 className="text-c-red" >{indonesia.map(indo =>(indo.meninggal))}</h3>
                                        <h5 > <span className="text-muted">Jiwa</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-6">
                                        {/* <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>25,998</h6> */}
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
                                <Card.Title as="h5">PROVINSI-INDONESIA DATA : </Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>NO</th>
                                        {/* <th>ID</th> */}
                                        <th>Provinsi</th>
                                        <th>Positif</th>
                                        <th>Sembuh</th>
                                        <th>Meninggal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {provinsi.map((provinsi,index) => 
                                        <tr>
                                        <td>{index + 1}</td>
                                        {/* <td>{provinsi.attributes.Kode_Provi}</td> */}
                                        <td>{provinsi.attributes.Provinsi}</td>
                                        <td className="text-bold">{provinsi.attributes.Kasus_Posi}</td>
                                        <td className="text-c-blue">{provinsi.attributes.Kasus_Semb}</td>
                                        <td className="text-c-red">{provinsi.attributes.Kasus_Meni}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        </Col>
                   
                   
                </Row>
            </Aux>
        );
    
}

export default DashboardIndo;