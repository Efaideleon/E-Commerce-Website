import Table from "../table/Table";
import { InventoryColumns, InventoryTableRendererProps } from "./types";
import InventoryTableTitleBar from "./InventoryTableTittleBar";

export default function InventoryTableRenderer({ date, totalSpent, totalProfitForSending, inventoryData }: InventoryTableRendererProps) {
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