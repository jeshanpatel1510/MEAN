let mysql = require('nodejs-mysql').default;

let auth = {
    host:"localhost",
    user:"root",
    password:"",
    database:"employee"
}

let con = mysql.getInstance(auth);

con.connect()
    .then(()=>{
        console.log("Connection Established!!");
        let sql = "INSERT INTO EmployeeTB(empname, designation, department) VALUES('Employee2', 'HR', 'HR')";
        return con.exec(sql);
    })
    .then((res)=>{
        console.log("\nData Inserted!!");
        console.log(res);
        return con.exec("SELECT * FROM EmployeeTB");
    })
    .then((res)=>{
        console.log("\nEmployee Record : ");
        for(var i in res)
        {
            console.log('\nEmployee Name : '+res[i].empname+'\nDesignation : '+res[i].designation+'\nDepartment : '+res[i].department);
        }
        process.exit(0);
    })
    .catch((err)=>{
        console.log(err);
        process.exit(0);
    })
