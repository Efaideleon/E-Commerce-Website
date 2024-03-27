import Table from "../table/Table";
import { fetchCSVData } from "../data/FetchCSVData";
import { InventoryData, InventoryColumns, InventoryTableRendererProps } from "./types";
import { useEffect, useState } from "react";
import InventoryTableTitleBar from "./InventoryTableTittleBar";
import { inventoryColumnSums } from "../data/DataProcessor";

export default function InventoryTableRenderer({ date, data_source_link }: InventoryTableRendererProps) {
    const [inventoryData, setInventoryData] = useState<InventoryData[]>([]);

    useEffect(() => {
        fetchCSVData<InventoryData>(data_source_link)
            .then(data => setInventoryData(data));
    }, [data_source_link]);

    const { totalSpent, totalProfitForSending } = inventoryColumnSums(inventoryData);

    return (
        <div>
            <div>
                <InventoryTableTitleBar date={date} total_spent={totalSpent} total_for_sending={totalProfitForSending} />
            </div>
            <div>
                <Table data={inventoryData} columns={InventoryColumns} />
            </div>
        </div>
    )
}