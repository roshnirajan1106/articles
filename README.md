React-Router
1. With react-router , there is no need to do server rendering for diffrent routes.
2. React router will keep track of all the routes and it will inject the code for that route , without going to server .
3. This makes the experince of switching pages much quicker and slicker.
4. Broweser Router wrap the entire application that includes routes
5. route is used to make the route
6. exact keyword is must for home component, because while writing /about , it matches the first character with the home component path("/")
7. Also make use of switch statement - this helps in showing only one component at a time
8. When we have big production-ready applications which serve backend, it is recommended to use <BrowserRouter>
9. href , asks the server to give html page
10. react intercepts the requests between client and server , we're not requesting the html page
11. for this use Link instead of href
12. Intial request is sent to browser but there after react-router intercepts and injects the code for the route without requesting the browser for a html page
13. NavLink is used to distinguish a active webRoute
14. for example if we're seeing /about then it helps in attaching the active class propety with it and in this way we can add some css to the active class
15. 
