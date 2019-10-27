var UserManager= {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addProduct: function (name, quantity) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into product(name, quantity) values(?, ?)",
                    [name, quantity],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add product error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}