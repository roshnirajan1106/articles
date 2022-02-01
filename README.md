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
------------------------------------------------
1. Route parameters : /articles/:id
2. id part is changeable
3. template string - {`string${var_name}`}
4. the colon part path="/articles/:id" in the path tells the react-router that id is changeable
------------------------------------------------
useParam hook
1. Component where we've to extract the route parameter - Article.js
2. make use of a hook - useParams()
3. const{id} = useParams();
4. here Ive usef id because path="/articles/:id"
5. fetch data with url and id concatenated
-----------------------------------------------
Redirecting 
1. make use of hook called useHistory
Syntax :
1. first import the useHistory hook
import {useHistory} from 'react-router-dom'
2. invoke it
const history = useHistory();
3. Now to redirect it to home page or any page make use of push function

history.push("/");
------------------------------------------------
1. what if someone gets to url with params which is not available
2. then ,inside switch statement write this syntax to catch such url
<Route path="*">
</Route>
3. this will match anything which doesnt matches previous paths.
4. inside jsx , where all the route paths are there , import redirect from react-router-dom and use it inside Route path

Syntax :
<Redirect to=""/>
------------------------------------------------
query parameters - Part of the url which we see at the end of the url 
1. after question mark
2. key - value pairs
3. for this we make use of useLocation hook
4. this gets the quesry string from paths in the url
5. const queryString = useLocation().search
6. useLocation has got many properties , the search function of it will fetch us the query string
7. Now to fetch the components of the queryString , we'll make use of a function called URLSearchParams ,and pass querystring as the parameter.
const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name")
   