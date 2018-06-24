# Title: mongodb-basics-tutorial
#
#

# CASE: Basic Mongodb Cli commands ==================================>
sudo service mongod start
sudo service mongod stop
sudo service mongod restart
sudo service mongod status

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