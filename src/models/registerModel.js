import pool from "../config/db.js"

class RegisterModel {
    static async create(data) {
        try {
            const { user, email, password } = data
            const information = await pool.query(`
            INSERT INTO Admins (admin_user, admin_email, admin_password)
            VALUES ($1, $2, $3)
            RETURNING *`, [user, email, password])
            return information.rows[0]
        }
        catch (err) {
            console.error(err)
            return res.status(401).json({
                message: "Error al crear la contraseña."
            })
        }
    }

    static async findByEmail(email) {
        try {
            const result = await
                pool.query('SELECT * FROM admins where admin_email = $1', [email]);
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

export default RegisterModel