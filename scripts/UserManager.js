var UserManager = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addUser: function (Name, Pass) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into user(Name, Pass) values(?, ?)",
                    [Name, Pass],
                    function (_tx, _results) { },
                    function (_tx, error) {
                        console.log("add user error: " + error.message);
                    }
                );
            },
            function (_error) { },
            function () { }
        );
    },
}