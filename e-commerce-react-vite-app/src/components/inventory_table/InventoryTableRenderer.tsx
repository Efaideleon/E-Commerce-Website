import Table from "../table/Table";
import { InventoryColumns, InventoryTableRendererProps } from "./types";
import InventoryTableTitleBar from "./InventoryTableTittleBar";

/**
 * Displays both the Table Title Bar which summarize the Table columns, and
 * also displays the entire table
 * @returns  InventoryTableTibleBar and Table
 */
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