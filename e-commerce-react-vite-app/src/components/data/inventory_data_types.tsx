export type InventoryData = {
    // Each attribute name must match the header name from the csv file
    nombre: string;
    precio_con_tax: number;
    precio_enviado: number;
    ganancia_para_envio: number;
}