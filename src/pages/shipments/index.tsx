import SearchBarComponent from "../../components/search-bar";
import { useEffect, useState } from 'react';
import { Table } from "reactstrap";
import data from '../../api/table-data.json';
import ShipmentModel from "../../models/shipmentModel";
import { statusColor } from "../../utils/shipmentStatuses";

const Shipments = () => {
  const [shipment, setShipment] = useState('');
  const [shipments, setShipments] = useState<ShipmentModel[]>([]);
  const [filteredResults, setfilteredResults] = useState<ShipmentModel[]>([]);

  useEffect(() => {
    setShipments(data);
  }, [shipment]);


  const searchShipment: any = (searchText: string) => {
    if (searchText !== '') {
      const filteredData = shipments.filter((order: any) => {
        const searchTextValue: any = searchText.toLowerCase();
        return Object.values(order).join('').toLowerCase().includes(searchTextValue)
      });
      setfilteredResults(filteredData);
    }
  }

  return (
    <div className="p-5 h-full">
      <div className="flex justify-between">
        <h1 className="text-black font-mont font-extrabold text-3xl mb-3">Shipments</h1>
        <img src={'../../assets/img/logo.png'} alt="" width={50} height={50} id="logoutPopover" />
      </div>

      <hr />
      <div className="w-1/3">
        <SearchBarComponent
          searchTerm={shipment}
          onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => { setShipment(e.target.value); searchShipment(e.target.value) }}
        />
      </div>

      <div className="mt-5">
        <Table striped className="w-full">
          <thead>
            <tr>
              <th>Shipment</th>
              <th>Client</th>
              <th>Entry date</th>
              <th>Shipment date</th>
              <th>Status</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              (filteredResults.length > 0) ? (
                <>
                  {
                    filteredResults.map((shipment: ShipmentModel, index) => {
                      return (
                        <tr key={index}>
                          <th>{shipment.shipmentName}</th>
                          <th>{shipment.clientName}</th>
                          <th>{shipment.entryDate}</th>
                          <th>{shipment.shipmentDate}</th>
                          <td> <div className={`bg-${statusColor(shipment.status)} text-white text-center py-1 my-1 rounded-full text-sm`}> {shipment.status.toLocaleUpperCase()} </div></td>
                          <th>{shipment.value}</th>
                          <th>View</th>
                        </tr>
                      );
                    })
                  }
                </>
              ) : (
                <>
                  {
                    shipments.map((shipment: ShipmentModel, index) => {
                      return (
                        <tr key={index}>
                          <th>{shipment.shipmentName}</th>
                          <td>{shipment.clientName}</td>
                          <td>{shipment.entryDate}</td>
                          <td>{shipment.shipmentDate}</td>
                          <td> <div className={`bg-${statusColor(shipment.status)} text-white text-center py-1 my-1 rounded-full text-sm`}> {shipment.status.toLocaleUpperCase()} </div></td>
                          <td>{shipment.value}</td>
                          <td>View</td>
                        </tr>
                      );
                    })
                  }
                </>
              )
            }
          </tbody>
        </Table>

      </div>

    </div>
  )
}

export default Shipments;