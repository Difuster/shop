import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

export default function DeviceItem(props) {
  const {device} = props;
  const navigate = useNavigate();

  return (
    <Col md={3}>
      <Card
        style={{width: '95%', cursor: 'pointer'}}
        className="mb-4 p-1"
        onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
      >
        <Image src={device.img} />
        <div className="d-flex justify-content-between align-items-center mt-2 text-black-50">
          <div>Samsung</div>
          <div className="d-flex align-items-center">
            <div className="me-1">{device.rating}</div>
            <Image src={star} width={16} height={16} />
          </div>
        </div>
        <div className="mt-1">{device.name}</div>
      </Card>
    </Col>
  )
}
