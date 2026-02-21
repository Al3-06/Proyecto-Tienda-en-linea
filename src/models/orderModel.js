import pool from "../config/db.js";

class OrderModel{
    static async show(limit=10, offset=0){
        try{
            const information = await pool.query(`
                SELECT *
                FROM orders
                ORDER BY order_id ASC
                LIMIT $1 OFFSET $2`, [limit, offset])
                return information.rows
        }
        catch (err) {
            console.error("Error al obtener productos:", err);
            throw new Error("No se pudieron cargar los productos de la base de datos."); 
        }
    }

    static async showByName(name){
        try{
            const information = await pool.query(`
            SELECT *
            FROM orders
            WHERE order_id=$1
            RETURNING *`, [name])
            return information.rows[0]
        }
        catch (err) {
            console.error("Error al obtener productos:", err);
            throw new Error("No se pudo cargar el producto de la base de datos."); 
        }
    }
}
export default OrderModel