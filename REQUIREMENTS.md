# Testing Requirements

We just launched a new banking site called EyeBank. It's located at https://sandbox.applitools.com/bank

We want to test the site to make sure some key features are working using Playwright's visual testing capabilities.


1. On the login page https://sandbox.applitools.com/bank?theme=true&validateForm=true, you can login with any username and password. You have to login with a username and password. Check that supplying only username or only password results in an error message. We spent some time making sure the login page looks good, so we want to make sure it stays that way.
 
2. Upon sign in, you'll land on the dashboard (https://sandbox.applitools.com/bank/dashboard?theme=true&layoutAlgo=true). On the dashboard, there is a financial overview that shows balance, credit available and due today and they change on reload. Let's make sure that the layout is correct. 

3. Below that are recent transactions. Transactions need to have Status, Date, Description, Category and Amount. 
