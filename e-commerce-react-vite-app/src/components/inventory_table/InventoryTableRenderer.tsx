import Table from "../table/Table";
import { fetchCSVData } from "../data/FetchCSVData";
import { InventoryData, InventoryColumns } from "./types";
import { useEffect, useState } from "react";

export default function InventoryTableRenderer() {
    const [inventoryData, setInventoryData] = useState<InventoryData[]>([]);

    useEffect(() => {
      fetchCSVData<InventoryData>('../../../inventory_test_data.csv')
        .then(data => setInventoryData(data));
    }, []);
    
    console.log(inventoryData);
    
    return (
        <>
            <Table data={inventoryData} columns={InventoryColumns} />
        </>
    )
}