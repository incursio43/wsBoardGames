import pool from '../db/mysql'

export const createBoardGame = async (req, res) => {
    //insert into boardgames (Name, Publisher, Category, Description, Year) values('Monopoly','Hasbro','FA','Juego de ventas de casas','1935');
    const {Name, Publisher, Category, Description, Year } = req.body
    await pool.query(`INSERT INTO BOARDGAMES (Name, Publisher, Category, Description, Year) values ('${Name}', '${Publisher}', '${Category}',
     '${Description}', '${Year}')`, function(error, results){
            if(error) {throw error;}
            res.json(results)
    })
}
export const getBoardGame = async (req, res) => {
    await pool.query('SELECT * FROM BOARDGAMES', function(error,results){
        if(error) {throw error;}
        res.json(results)
    })
}
export const getBoardGameById = async (req, res) => {
    const ID = req.params.id
    await pool.query(`SELECT * FROM BOARDGAMES WHERE ID=${ID}`, function(error, results){
        if(error) {throw error;}
        res.json(results)
    })
}
export const updateBoardGameById = async (req, res) => {
    const {Publisher, Category, Description, Year } = req.body
    const ID = req.params.id

    await pool.query(`UPDATE BOARDGAMES SET Publisher = '${Publisher}', Category='${Category}', Description='${Description}',
     Year='${Year}' WHERE ID=${ID}`, function(error, results){
        if(error) {throw error;}
        res.json(results)
    })
}
export const deleteBoardGameById = async (req, res) => {
    const ID = req.params.id
    await pool.query(`DELETE FROM BOARDGAMES WHERE ID=${ID}`, function(error, results){
        if(error) {throw error;}
        res.json(results)
    })
}