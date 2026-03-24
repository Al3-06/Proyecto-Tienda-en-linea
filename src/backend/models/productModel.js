import pool from "../config/db.js"

class ProductModel{
    static async show(limit=10, offset=0){
        try{
            const information = await pool.query(`
                SELECT *
                FROM Products
                ORDER BY name ASC
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
            FROM Products
            WHERE name=$1
            RETURNING *`, [name])
            return information.rows[0]
        }
        catch (err) {
            console.error("Error al obtener productos:", err);
            throw new Error("No se pudo cargar el producto de la base de datos."); 
        }
    }

    static async showByid(id){
        try{
            const information = await pool.query(`
            SELECT *
            FROM Products
            WHERE product_id=$1`, [id])
            return information.rows[0]
        }
        catch (err) {
            console.error("Error al obtener producto:", err);
            throw new Error("No se pudo cargar el producto de la base de datos.");
        }
    }

    static async delete(id) {
        try {
            await pool.query('DELETE FROM Cartdetails WHERE FK_product_id = $1', [id]);
            await pool.query('DELETE FROM OrderDetails WHERE FK_product_id = $1', [id]);
            await pool.query('DELETE FROM SupplyDetails WHERE FK_product_id = $1', [id]);

            const information = await pool.query(`
                DELETE FROM Products
                WHERE product_id=$1
                RETURNING *`, [id]);
            return information.rows.length > 0 ? information.rows[0] : null;
        }
        catch (err) {
            console.error(err)
            throw new Error("Error al borrar el producto.")
        }
    }

}

export default ProductModel