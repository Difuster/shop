import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Card } from "react-bootstrap";
import { actions as devicesActions } from "../slices/devicesSlice";

export default function BrandBar() {
  const brands = useSelector(state => state.devices.brands);
  const selectedBrand = useSelector(state => state.devices.selectedBrand)
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-direction-row">
      {brands.map((brand) => {
        return (
          <Card
            style={{cursor: 'pointer', minWidth: '10%', textAlign: 'center'}}
            key={brand.id}
            className="p-3"
            onClick={() => dispatch(devicesActions.setSelectedBrand(brand))}
            border={brand.id === selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        )
      })}
    </div>
  )
}