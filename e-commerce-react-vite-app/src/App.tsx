import './App.css'
import InventoryTableRenderer from './components/inventory_table/InventoryTableRenderer'
import { fetchCSVData } from './components/helper_functions/FetchCSVData';
import { InventoryData } from './components/data/inventory_data_types';
import { useEffect, useState } from 'react';
import { inventoryColumnSums } from './components/data/InventoryDataProcessor';
import { InventoryDashBoard } from './components/inventory_dashboard/InventoryDashBoard';


function App() {
	const [inventoryData, setInventoryData] = useState<InventoryData[]>([]);

	useEffect(() => {
		fetchCSVData<InventoryData>('../inventory_test_data.csv')
			.then(data => setInventoryData(data));
	}, []);

	const { totalSpent, totalProfitForSending } = inventoryColumnSums(inventoryData);

	return (
		<div className="App">
			<InventoryDashBoard total_spent={10000}/>
			<InventoryTableRenderer date='1-1-2020' totalSpent={totalSpent} totalProfitForSending={totalProfitForSending} inventoryData={inventoryData} />
		</div>
	)
}

export default App
