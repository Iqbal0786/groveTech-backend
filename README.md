# groveTech-backend
#Deployed Link : https://grovetech-backend.herokuapp.com/v1/products

#There are two end points : 
1. post route (/v1/products) : https://grovetech-backend.herokuapp.com/v1/products by using the api we can send request body as json object and create new entry in the data base easily  and response of this route will be the newly created entry .
2. get route(/v1/products): So in get request method i have designed it in two way. 

a. if we don't provide any query parameter while requesting through api like  (https://grovetech-backend.herokuapp.com/v1/products) so it will return whole records from database .

b. if we provide search query parameter while requesting through api like  (https://grovetech-backend.herokuapp.com/v1/products?search=category-name) so it will return all the records according to given category as a serach parameter with pagination and sorted by created time from newest to old. 
And we can also specify page and size in request like (https://grovetech-backend.herokuapp.com/v1/products?search=category-name&page=2&size=20).

Note: category name must be without quotes like https://grovetech-backend.herokuapp.com/v1/products?search=apparel else it will return empty data
