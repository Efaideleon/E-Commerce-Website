import { Column } from "../table/interfaces";

export type InventoryData = {
    // Each attribute name must match the header name from the csv file
    nombre: string;
    precio_con_tax: number;
    precio_enviado: number;
    ganancia_para_envio: number;
}

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
    date: string
    data_source_link: string
}