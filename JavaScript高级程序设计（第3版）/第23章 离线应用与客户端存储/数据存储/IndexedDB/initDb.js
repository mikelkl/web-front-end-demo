const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
    { ssn: "666-66-6666", name: "2", age: 2, email: "2@home.org"},
    { ssn: "777-77-7777", name: "3", age: 3, email: "3@home.org"},
    { ssn: "888-88-8888", name: "4", age: 4, email: "4@home.org"}
];
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);
request.onerror = function(event) {
    console.log("Error",event.target.error);
    // error handler
};

// 要更新数据库的 schema，也就是创建或者删除对象存储空间，
// 需要实现 onupgradeneeded 处理程序，这个处理程序将会作为
// 一个允许你处理对象存储空间的 versionchange 事务的一部分
// 被调用。
request.onupgradeneeded = function (event) {
    db = event.target.result;

    // 创建一个对象存储空间来持有有关我们客户的信息。
    // 我们将使用 "ssn" 作为我们的 key path 因为它保证是唯一的。
    var objectStore = db.createObjectStore("customers", {keyPath: "ssn"});

    // 创建一个索引来通过 name 搜索客户。
    // 可能会有重复的，因此我们不能使用 unique 索引。
    objectStore.createIndex("name", "name", { unique: false });

    // 创建一个索引来通过 email 搜索客户。
    // 我们希望确保不会有两个客户使用相同的 email 地址，因此我们使用一个 unique 索引。
    objectStore.createIndex("email", "email", { unique: true });

    // 在新创建的对象存储空间中保存值
    for (var i in customerData) {
        objectStore.add(customerData[i]);
    }
};