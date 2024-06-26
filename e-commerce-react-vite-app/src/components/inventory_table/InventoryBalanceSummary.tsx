import { InventoryTableTitleBarProps } from "./types";
import "./InventoryTableTitleBar.css"
/**
 * The title bar that summarizes the Table's columns
 */
const InventoryBalanceSummary = ({ date, total_spent, total_for_sending }: InventoryTableTitleBarProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th> Date: {date}</th>
                    <th> Total Spent: {total_spent}</th>
                    <th> Total for Sending: {total_for_sending}</th>
                </tr>
            </thead>
        </table>
    );
};

export default InventoryBalanceSummary;