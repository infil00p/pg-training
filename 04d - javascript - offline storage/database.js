/*  when we have more complex, self-contained logic, it's a good idea to
    separate it into multiple JavaScript functions  */
    
var myDatabase;

function initializeDatabase() {
  myDatabase = window.openDatabase(
    "pg-training",            // short name
    "1.0",                    // version number
    "PhoneGap Training App",  // long name
    5000000);                 // database size
    
  myDatabase.transaction(function (transaction) {
    transaction.executeSql(
      "CREATE TABLE IF NOT EXISTS settings " + 
        "(settingName NVARCHAR(10), settingValue NVARCHAR(10));",
      [], // any parameters for the query,
      function (transaction, resultSet) {
        // a success callback
      },
      function (transaction, error) {
        alert('There has been a query error:' + error.message);
      }
    )
  },
  // error callback
  function (error) {
    alert('There has been a transaction error:' + error.messaage);
  }); // If we want, we can put a success callback here also
}