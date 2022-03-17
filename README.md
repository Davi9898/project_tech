Welcome to the Gaming matching application : Gameting

This github contains the code for the inlog feature which I have created for project TECH at 'Hogeschool van Amsterdam'. For this project we had to create a matching application and create one of its features.
I chose to create the inlog and register feature for this application. This project contains NodeJS, Express , EJS and a **MONGODB** connection.

# Installation 

### Step 1 Repository

To install this application you start with openening your code editor and select a new folder for this project. You can either clone the repository :

gh repo clone Davi9898/project_tech

or you can download the zip on the top right of the repository page.

### Step 2 Dependencies

Once you have the files you need to install the dependencies. You can do this by typing npm install in the terminal. 

### Step 3 MONGODB

navigate to the MONGODB website and create an account. After you've created an account you should create a cluster. Once you've created a cluster click connect and then click 'Connect your application'. Once you've done this a string wil appear which you can copy.

### Step 4 .ENV

Create an .env file in your folder and type MONGODB="put your URI here" Don't forget to change the <password> into your password and also dont forget to remove <> around you're password. Also dont forget to put "" around your URI.

## Step 5 Run application

You can now run your application by typing in the terminal **npm run dev**
  
## Step 6 .gitignore
  
Don't forget to add a .gitignore file in your directory. Write node_modules and a line beneath it .env to never push these files to an open source so they can be accidently stolen from you.

