import { InventoryDashBoardProps } from "./types"
import "./InventoryDashboard.css"

/**
 * The Website's Dashboard
 */
export const InventoryDashBoard = ({ total_spent, total_enviado }: InventoryDashBoardProps) => {
    return (
        <div className="InventoryDashBoard">
            Total Spent: {total_spent}
            Total Enviado: {total_enviado}
        </div>
    )
}

