import pool from "../config/db.js"

class AdminModel{
    static async edit(id, data) {
        const { user, email, password } = data
        try {
            const information = await pool.query(`
                    UPDATE Admins
                    SET user_name=$2, email=$3, password=$4
                    WHERE id=$1
                    RETURNING *`, [id, user, email, password])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al editar la información."
            })
        }
    }

    static async delete(id) {
        try {
            const information = await pool.query(`
                    DELETE FROM Admins
                    WHERE id=$1
                    RETURNING *`, [id])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al borrar la información."
            })
        }
    }

    static async show(limit = 5, offset = 0) {
        try {
            const information = await pool.query(`
                    SELECT user_name
                    FROM Admins
                    ORDER BY user_name ASC
                    LIMIT $1 OFFSET $2`, [limit, offset])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al mostrar toda la información."
            })
        }
    }

    static async showByName(name) {
        try {
            const information = await pool.query(`
                SELECT user_name
                FROM Admins
                WHERE user_name=$1
                RETURNING *`, [name])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al mostrar una parte de la informacion."
            })
        }
    }

    static async findByEmail(email) {
        try {
            const result = await
                pool.query('SELECT * FROM Admins WHERE email = $1', [email]);
            return result.rows[0];
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al verirficar el correo electronico."
            })
        }
    }
}

export default AdminModel