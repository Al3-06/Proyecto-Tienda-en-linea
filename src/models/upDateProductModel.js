import pool from "../config/db.js"

class UpDateProductModel {
    static async create(data) {
        try {
            const { name, description, price, img, stock } = data
            const information = await pool.query(`
                INSERT INTO product (product_name, product_description, product_price, product_img, product_stock)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *`, [name, description, price, img, stock])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            // Solo lanza el error o devuelve null. ELIMINA 'return res.status...'
            throw new Error("Error al crear el producto.");
        }
    }

    static async edit(id, data) {

        try {
            const { name, description, price, img, stock } = data
            const information = await pool.query(`
                UPDATE product
                SET product_name=$2, product_description=$3, product_price=$4, product_img=$5, product_stock=$6
                WHERE id=$1
                RETURNING *`, [id, name, description, price, img, stock])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al actualizar el producto."
            })
        }
    }

    static async delete(id) {
        try {
            const information = await pool.query(`
                DELETE FROM product
                WHERE id=$1
                RETURNING *`, [id])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al borrar el producto."
            })
        }
    }

}

export default UpDateProductModel