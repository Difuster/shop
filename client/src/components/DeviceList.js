import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

export default function DeviceList() {
  const devices = useSelector(state => state.devices.devices);
  const dispatch = useDispatch();

  return (
    <Row className="d-flex">
      {devices.map(device => {
        return (
          <DeviceItem key={device.id} device={device} />
        )
      })}
    </Row>
  )
}
