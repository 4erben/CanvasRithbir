import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import pics from '../data/data';

import { Link } from 'react-router-dom';
export default function CardsPage() {
    const params = useParams();
    const id = params.id;
    const cardId = params.id.split("-")[1];
    const cardLetter = params.id.split("-")[0];
    const cardData = pics.find((element)=>element.no == id);
    console.log(cardData);
  return (
    <Container>
      
        <Row className='justify-content-center align-items-center my-2'>
        <Link className='btn btn-warning mx-auto fw-bold' to="/">عد للبطاقات</Link>
        <Link className='my-2' to={`/card/a-${id}`}>
            <img src={cardData.a} className='img-fluid card mx-auto'/>
        </Link>
        <Link className='my-2' to={`/card/b-${id}`}>
        <img src={cardData.b} className='img-fluid card mx-auto'/>
        </Link>
       { cardData.c?<Link className='my-2' to={`/card/c-${id}`}>
        <img src={cardData.c} className='img-fluid card mx-auto'/>
        </Link>:null} 
        <Link className='my-2' to={`/card/d-${id}`}>
        <img src={cardData.d} className='img-fluid card mx-auto'/>
        </Link>
        <Link className='my-2' to={`/card/f-${id}`}>
        <img src={cardData.f} className='img-fluid card mx-auto'/>
        </Link>
        <Link className='my-2' to={`/card/e-${id}`}>
        <img src={cardData.e} className='img-fluid card mx-auto'/>
        </Link>
        </Row>
    </Container>
  )
}
