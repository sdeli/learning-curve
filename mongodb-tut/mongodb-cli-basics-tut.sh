# Title: mongodb-basics-tutorial
# tut vids: udemy node.js course

# IMPORTANT NOTES
# Inside of NoSql database we have COLLECTIONS => kind of arrayOfObjects => tables in sql
# Inside of COLLECTION we have DOCUMENTS => kind of an OBJECT on an arrays index
# Inside of documents properties are called FIELDS

# A model is a collection with an api, which api gives methods to interact with the collection
# A collection is like a table in sql database. 
# Since it is non-structured we need to define a structure => Schema
# Schema defines the structure of a record => row in sql
# the records will be stored in a collection => table in sql
# in the schema definition consist of key : value pairs in object literal
# each key is a certain property of the record, each value is the dataType of the property
doc-id-4x4COz
mr.noel.flattery@email.com
# INSTALL MONGODB https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
# CASE: Basic Mongodb Cli commands ==================================>
sudo service mongod start
sudo service mongod stop
sudo service mongod restart
sudo service mongod status

# CASE: Determine Databses Dir ======================================>
# exeucte from where mongod executable is present
./mongod --dbpath /home/sandor/Documents/mongo-databases
# CASE: Create / Drop Mdb server ==================================>
mongo --quiet #start mongo shell
show db;
use <databasename> # switch to/create dbs
db.createCollection('value'); # create the first collection => Table
db.dropDatabase(); #delete db

# CASE: Usefule commands ==================================>
db.getCollectionInfos();
db.<collectionname>.find().pretty(); #visualize collections

# CASE: Insert into db ==================================>
use custApp # switch to/create dbs
db.createCollection('users'); # create the first collection => Table
db.users.insert([{first_name:"Sandor",last_name:"Deli",email:majom@gmail.com},{first_name:"Kecskes",last_name:"Alexandra",email:alexa@gmail.com}]);

# CASE: Create / Drop USER for db ==================================>
db.createUser({user: "Sandor",pwd: "dalias19",roles: ['readWrite',"dbAdmin"]});
db.dropUser('Sandor');

# CASE: Update full docs ==================================>
	# db.users.update({match agains},{replace with})				
db.users.update({first_name:"Sandor"}, {first_name:"Sandorini", gender:"male"}); # db.users.update({match agains},{replace with})

# CASE: Extend content of docs ==================================>
db.users.update( {first_name:"Sandor"}, {$set: {age:45}} ); # add a field
db.users.update( {first_name:"Sandor"}, {$inc: {age:5}}); # increment a filed
db.users.update( {first_name:"Sandor"}, {$unset: {age:5}}); #delete value doesnt matter
db.users.update({inc:1}, {first_name:"Betty",_last_name:"Boo",email:"bkszmsdeli@gmail.com",
 gender:"female"},{upsert:true}); # if query doesnt match any filed than update database with param 2
db.users.update( {first_name:"Betty"}, {$rename: {"gender":"sex"}}); #rename property

# CASE: Remove docs ==================================>	
 db.users.remove({first_name:"Sandor"});
 db.users.remove({first_name:"Sandor"},{justOne:true}); #just the first occurance

# CASE: Find() in database ==================================>
db.users.find(#or:{gender:'male'});
db.users.find(#or:[{first_name:"Sandor"},{first_name:"Betty"}]);
db.users.find({age:{$lt:60}});
db.users.find("adress.city":"Boston");

# CASE: Cursor Methods ==================================>
db.users.find().sort(first_name:-1); # Returns results ordered according to a sort specification.
db.users.find().count({gender:"male"});
db.users.find().forEach(function(doc){print("doc represents the cursor: " + doc.first_name)});