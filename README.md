# Working link: 


# Summary:
This dashboard is implements an interface where a users can login and view
details about their posts and todo items.

# Technology stack :  
HTML, CSS, AngularJS, Javascript (ES6)

# Description:
- The home page needs the the user to login. On sucessfull login the users are taken to the dashboard page. They will be logged in till they logout.

- The sample usernames and email data from the  https://jsonplaceholder.typicode.com/ is placed in the user.json file for testing

- In the dashboard page, user are shown their number of posts, number of todo items and the number of comments associated with all their posts.

- A list of Todo items with their respective status is displayed. And also, the list of Post titles are displayed. On clicking the post the user will be taken to the details page.
On clicking the remove icon, the post will be removed from the list after delete request is made to the server.

- In the post details page, the title along with the body is displayed. The body can be updated. On successfull response from the server, a notification is given.

- The user can logout anytime by going to the homepage.

# Sources/Refernces
- The template for the site was taken from Colorlib.
- The basic layout was kept, modifications and additional elements were added.