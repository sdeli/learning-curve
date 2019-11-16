# login to postgres
sudo su - postgres
psql -U postgres

# change password
\password postgres

#  describe empoyees table
\d employees

# list all dbs
\l

# List all schemas
\dn

# quit
#\q

\c taskmanagement

# List databases
\dt

CREATE DATABASE testing2;
CREATE DATABASE tutorial;
