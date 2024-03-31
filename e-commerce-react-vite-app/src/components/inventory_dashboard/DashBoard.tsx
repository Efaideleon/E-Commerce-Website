import { InventoryDashBoardProps } from "./types"
import "./Dashboard.css"

/**
 * The Website's Dashboard
 */
export const Dashboard = ({ total_spent, total_enviado }: InventoryDashBoardProps) => {
    return (
        <div className="InventoryDashBoard">
            Total Spent: {total_spent}
            Total Enviado: {total_enviado}
        </div>
    )
}

