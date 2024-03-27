import { Column } from "../table/interfaces";
import { InventoryData } from "../data/inventory_data_types";

export const InventoryColumns: Column<InventoryData>[] = [
    { header: "Nombre", accessor: "nombre" },
    { header: "Precio c/ Tax", accessor: "precio_con_tax" },
    { header: "Precio Enviado", accessor: "precio_enviado" },
    { header: "Ganancia para Envio", accessor: "ganancia_para_envio" },
];

export type InventoryTableTitleBarProps = {
    date: string;
    total_spent: number;
    total_for_sending: number;
}

export type InventoryTableRendererProps = {
    date: string;
    totalSpent: number;
    totalProfitForSending: number;
    inventoryData: InventoryData[];
}