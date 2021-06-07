# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
 
 -- SQL is short for Structured Query Language.  Domain specific language used for communciating with relational databases.



2. What the PostgreSQL query that would return all the content in a particular table?
    SELECT *



3. What is the command to create a new Rails application with a PostgreSQL database?

$ rails new app_name -d postgresql -T




4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$ rails generate model Meals breakfast:string lunch:string dinner:string





5. What is a migration? Why would you use one?


Migrations are used to modify the shape of an existing database.



6. What is the command to generate a migration file?

$ rails generate migration





7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

snake_case or PascalCase can be used.  Migration name ends with the name of table.



8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema represents the "shape" of the databse or what columns are in the table and the data types of the columns.  The schema cannot be modified as it is just a representation the current shape of a databse.



9. What is the Rails console?
The rails console is an irb(interactive ruby).  It lets one interact with parts of an app directly from the command line without having to go through a browser



10. What is the Rails console command to see all the content in a particular table?

.all
