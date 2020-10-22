const pool =require("../../config/database");

module.exports ={
    create :(data,callBack)=>{
        pool.query(
            `insert into registration(id,username,password)values(?,?,?)`,
            [
                data.id,
                data.username,
                data.password
            ],
            (error,results,fields)=>{
                 if(error)
                 {
                    return callBack(error);
                 }
                 return callBack(null,results);
            }
        );
    },
    getUsers:callBack =>{
        pool.query(
            `select id,username,password from registration`,
            [],
            (error,results,fields)=>{
                if(error)
                {
                   return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getUserByUserId:(id,callBack)=>{
        pool.query(
            `select id,username,password from registration where id=?`,
            [id],
            (error,results,fields)=>{
                if(error)
                {
                   return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getUserByUserUsername:(username,callBack)=>{
        pool.query(
            `select * from registration where username=?`,
            [username],
            (error,results,fields)=>{
                if(error)
                {
                   return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    updateUser :(data,callBack)=>{
        pool.query(
            `update registration set id=?,username=?,password=? where id=?`,
            [
                data.id,
                data.username,
                data.password
            ],
            (error,results,fields)=>{
                 if(error)
                 {
                    return callBack(error);
                 }
                 return callBack(null,results);
            }
        );
    },
    deleteUser :(data,callBack)=>{
        pool.query(
            `delete from registration where id=?`,
            [
                data.id
            ],
            (error,results,fields)=>{
                 if(error)
                 {
                    return callBack(error);
                 }
                 return callBack(null,results[0]);
            }
        );
    },
};