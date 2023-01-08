import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { actions as devicesActions } from "../slices/devicesSlice";

export default function TypeBar() {
  const types = useSelector(state => state.devices.types);
  const selectedType = useSelector(state => state.devices.selectedType);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {types.map(type => {
        return (
          <ListGroup.Item
            style={{cursor: 'pointer'}}
            key={type.id}
            onClick={() => dispatch(devicesActions.setSelectedType(type))}
            active={type.id === selectedType.id}
          >
            {type.name}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}