
//Creating a datbase
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
//Adding item in table
function addUser() {
    var Name = $("#txtName").val();
    var Pass = $("#txtPass").val();


   
            UserManager.addUser(Name, Pass);
            $("#txtName").val("");
            $("#txtPass").val("");
        }
    