import pool from "../config/db.js";

class OrderModel{
    static async show(limit=10, offset=0){
        try{
            const information = await pool.query(`
                SELECT *
                FROM Orders
                ORDER BY order_id ASC
                LIMIT $1 OFFSET $2`, [limit, offset])
                return information.rows
        }
        catch (err) {
            console.error("Error al obtener pedidos:", err);
            throw new Error("No se pudieron cargar los pedidos de la base de datos.");
        }
    }

    static async showById(id){
        try{
            const information = await pool.query(`
            SELECT *
            FROM Orders
            WHERE order_id=$1`, [id])
            return information.rows[0]
        }
        catch (err) {
            console.error("Error al obtener pedido:", err);
            throw new Error("No se pudo cargar el pedido de la base de datos."); 
        }
    }
}

export default OrderModel