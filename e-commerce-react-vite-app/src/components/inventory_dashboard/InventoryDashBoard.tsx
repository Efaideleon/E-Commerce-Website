import { InventoryDashBoardProps } from "./types"
import "./InventoryDashboard.css"

export const InventoryDashBoard = ({ total_spent }: InventoryDashBoardProps) => {
    return (
        <div className="InventoryDashBoard">
            Total Spent: {total_spent}
        </div>
    )
}

