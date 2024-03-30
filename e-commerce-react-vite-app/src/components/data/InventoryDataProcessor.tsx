import { InventoryData } from "./inventory_data_types";

/**
 * 
 * @param data Array of `InventoryData` Objects
 * @returns The sum of the `precio con tax` from each product
 */
export function getPrecioConTaxSum(data: InventoryData[]) {
	let total = 0;

	data.forEach((row) => {
		total += row.precio_con_tax; 
	});
	total = parseFloat(total.toFixed(2));
	return total;
}

/**
 * 
 * @param data Array of `InventoryData` Object 
 * @returns The sum of the `precio enviado` from each product
 */
export function getPrecioEnviadoSum(data: InventoryData[]) {
	let total = 0;
	
	data.forEach((row) => {
		total += row.precio_enviado; 
	});
	total = parseFloat(total.toFixed(2));
	return total;
}

/**
 * 
 * @param inventories An array containing all the inventory arrays
 * @returns	 The sum of the total spent from all inventories. Price bought at store
 */
export function getTotalSpentFromAllInventories(inventories: InventoryData[][]) {
	let total = 0;

	inventories.forEach((inventory) => {
		total += getPrecioConTaxSum(inventory);
	})
	total = parseFloat(total.toFixed(2));
	return total;
}

/**
 * 
 * @param inventories  An array containing all the inventory arrays
 * @returns  The sum of the `Precio Enviado` across all inventories
 */
export function getTotalEnviadoFrommAllInventories(inventories: InventoryData[][]) {
	let total = 0;

	inventories.forEach((inventory) => {
		total += getPrecioEnviadoSum(inventory);
	})
	total = parseFloat(total.toFixed(2));
	return total;

}

