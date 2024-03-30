import './App.css'
import InventoryTableRenderer from './components/inventory_table/InventoryTableRenderer'
import { fetchCSVData } from './components/helper_functions/FetchCSVData';
import { InventoryData } from './components/data/inventory_data_types';
import { useEffect, useState } from 'react';
import { getPrecioConTaxSum, getPrecioEnviadoSum, getTotalEnviadoFrommAllInventories, getTotalSpentFromAllInventories } from './components/data/InventoryDataProcessor';
import { InventoryDashBoard } from './components/inventory_dashboard/InventoryDashBoard';


function App() {
	const [allInventoriesData, setAllInventoriesData] = useState<InventoryData[][]>([]);
	const [inventoriesSourcePath, setInventoriesSourcePath] = useState<string[]>([]);
	const [totalSpent, setTotalSpent] = useState(0);
	const [totalEnviado, setTotalEnviado] = useState(0);

	/***** Data Processing *****/

	// Getting the csv data
	useEffect(() => {
		setInventoriesSourcePath(['../Inventario 1 - Jun 1, 2022  - Sheet1.csv', '../Inventario 2 - Aug 9, 2022 - Sheet1.csv', '../Inventario 3 - May 8, 2023 - Sheet1.csv', '../Inventario 4 - Jul 16, 2023 - Sheet1.csv', '../Inventario 5 - Dec 25, 2023 - Sheet1.csv']);

		const fetchData = async () => {
			const dataPromises = inventoriesSourcePath.map((path) => fetchCSVData<InventoryData>(path));
			const allData = await Promise.all(dataPromises);

			// Update the state with the combined data
			setAllInventoriesData(allData);
		};

		fetchData();

		setTotalSpent(getTotalSpentFromAllInventories(allInventoriesData));
		setTotalEnviado(getTotalEnviadoFrommAllInventories(allInventoriesData));
	}, [allInventoriesData, inventoriesSourcePath]);

	return (
		<div className="App">
			{/* Website Dashboard */}
			<div className="dashboard-container">
				<InventoryDashBoard
					total_spent={totalSpent}
					total_enviado={totalEnviado}
				/>
			</div>
			{/* Inventory Package */}
			{
				allInventoriesData.map((inventoryData) => {
					return (<InventoryTableRenderer
						date='1-1-2020'
						totalSpent={getPrecioConTaxSum(inventoryData)}
						totalProfitForSending={getPrecioEnviadoSum(inventoryData)}
						inventoryData={inventoryData}
					/>
					)
				})
			}
		</div>
	)
}

export default App
