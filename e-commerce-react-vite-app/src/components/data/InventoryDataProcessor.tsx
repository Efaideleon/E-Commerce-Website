import { InventoryData } from "./inventory_data_types";

export function inventoryColumnSums(data: InventoryData[]) {
	let totalSpent = 0;
	let totalProfitForSending = 0;

	data.forEach((row) => {
		totalSpent += row.precio_con_tax; // Sum for 2nd column
		totalProfitForSending += row.ganancia_para_envio; // Sum for 4th column
	});


	totalSpent = parseFloat(totalSpent.toFixed(2));
	totalProfitForSending = parseFloat(totalProfitForSending.toFixed(2));

	return { totalSpent, totalProfitForSending };
}