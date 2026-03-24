import pool from "../config/db.js"

class UpDateProductModel {
    static async create(data) {
        try {
            const { name, description, price, img, stock } = data
            const information = await pool.query(`
                INSERT INTO Products (name, description, price, img, product_stock)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *`, [name, description, price, img, stock])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            throw new Error("Error al crear el producto.");
        }
    }

    static async edit(id, data) {

        try {
            const { name, description, price, img, stock, product_stock } = data
            const finalStock = stock ?? product_stock
            const finalImg = img ?? data.img

            const information = await pool.query(`
                UPDATE Products
                SET name=$2, description=$3, price=$4, img=$5, product_stock=$6
                WHERE product_id=$1
                RETURNING *`, [id, name, description, price, finalImg, finalStock])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            throw err
        }
    }
    static async delete(id) {
        try {
            const information = await pool.query(`
                DELETE FROM Products
                WHERE product_id=$1
                RETURNING *`, [id])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            throw new Error("Error al borrar el producto.")
        }
    }

}

export default UpDateProductModel