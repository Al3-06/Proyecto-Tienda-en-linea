import pool from "../config/db.js"

class ProductModel{
    static async show(limit=10, offset=0){
        try{
            const information = await pool.query(`
                SELECT *
                FROM product
                ORDER BY product_name ASC
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
            FROM product
            WHERE product_name=$1
            RETURNING *`, [name])
            return information.rows[0]
        }
        catch (err) {
            console.error("Error al obtener productos:", err);
            throw new Error("No se pudo cargar el producto de la base de datos."); 
        }
    }
}

export default ProductModel