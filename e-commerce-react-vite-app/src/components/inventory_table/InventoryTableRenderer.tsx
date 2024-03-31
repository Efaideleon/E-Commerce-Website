import Table from "../table/Table";
import { InventoryColumns, InventoryTableRendererProps } from "./types";
import InventoryBalanceSummary from "./InventoryBalanceSummary";

/**
 * Displays both the Table Title Bar which summarize the Table columns, and
 * also displays the entire table
 * @returns  InventoryTableTibleBar and Table
 */
export default function InventoryTableRenderer({ date, totalSpent, totalProfitForSending, inventoryData }: InventoryTableRendererProps) {
    return (
        <div>
            <div>
                <InventoryBalanceSummary date={date} total_spent={totalSpent} total_for_sending={totalProfitForSending} />
            </div>
            <div>
                <Table data={inventoryData} columns={InventoryColumns} />
            </div>
        </div>
    )
}