/**
 * Data extracted from the csv file
 * Each attribute name must match the header name from the csv file
 * 
 * @member nombre - The name of the product
 * @member precio_con_tax - The price the product was bought at
 * @member precio_enviado - The price sent to Guate at
 */
export type InventoryData = {
    nombre: string;
    precio_con_tax: number;
    precio_enviado: number;
}