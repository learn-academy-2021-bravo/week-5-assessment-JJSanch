# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

    SQL stands for standard query language.  It is an object relational database management system.  It can be used to reqeust specific information from a database.


2. What the PostgreSQL query that would return all the content in a particular table?

An asterisk "*" would return all items from a table.





3. What is the command to create a new Rails application with a PostgreSQL database?

    $ rails new app_name =d postgresql -T



4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

    $ rails g Model breakfast: string lunch: string dinner: string


5. What is a migration? Why would you use one?

    Migrations are used to modify a database with new information.


6. What is the command to generate a migration file?

    rails:db migrate 


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

    rails g Model



8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

    The schema file is a represenation of the current state of a database, and cannot be directly edited.



9. What is the Rails console?

    Rails console is used to directly interact with the Active Record



10. What is the Rails console command to see all the content in a particular table?

    .all
