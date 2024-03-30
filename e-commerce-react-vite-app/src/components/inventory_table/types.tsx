import { Column } from "../table/interfaces";
import { InventoryData } from "../data/inventory_data_types";

/**
 * This are the column names and their respecitve accessor to InventoryData, which is the data from the csv file
 */
export const InventoryColumns: Column<InventoryData>[] = [
    { header: "Nombre", accessor: "nombre" },
    { header: "Precio con Tax", accessor: "precio_con_tax" },
    { header: "Precio Enviado", accessor: "precio_enviado" },
];

/**
 * Title bar for the whole package
 * @member date - The date the package was created 
 * @member total_spent - The sum of all `Precio con Tax`
 * @member total_for_sending - The sum of all `Precio Enviado`
 */
export type InventoryTableTitleBarProps = {
    date: string;
    total_spent: number;
    total_for_sending: number;
}

/**
 * Arguemnts to pass to InventoryTableTitleBar and Table
 * @member date - The date the package was created 
 * @member totalSpent - The sum of all `Precio con Tax`
 * @member totalProfitForSending - The sum of all `Precio Enviado`
 * @member inventoryData - Data extracted from the csv file
 */
export type InventoryTableRendererProps = {
    date: string;
    totalSpent: number;
    totalProfitForSending: number;
    inventoryData: InventoryData[];
}