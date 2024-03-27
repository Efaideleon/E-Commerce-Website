import './App.css'
import InventoryTableRenderer from './components/inventory_table/InventoryTableRenderer'

function App() {
	return (
		<div className="App">
			<InventoryTableRenderer date='1-1-20' data_source_link='../inventory_test_data.csv'/>
		</div>
	)
}

export default App
