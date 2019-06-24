# Swiggy-Test

Application fetches the nearest delivery partner to a pickup location and plots it on a graph

To run the Application on your system follow these steps:
1 . Run npm install on the source folder
2 . Navigate into the client folder and run npm install on the client folder
3 . Execute the commond :  npm run dev 


Data set used for delivery partners and pickup information is present in the folder ./public

Approach :

Server Side : Node JS , Express JS , MongoDB Atlas
1.To store the information into the database REST API endpoints were created for Delivery Partners and Pickup details.
2. Pick up details also included the drop off location coordinates.
2. To get the information about the nearest delivery partner to a pick up location the REST API endpoint was used in the format :
    'api/partners?lng=-80&lat=25'
3. As a response the details about the delivery partners location , contact information , pick up and drop off location coordinates were sent.

Client Side: React - Redux
1. Information was extracted by making a request to the API end point for getting the partner available near the pickup location.
2 . Information was presented on the application using Redux.
3 . All the locations were plotted on google maps using google-maps-react package


