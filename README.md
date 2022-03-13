# Getir Backend Assignment
A RESTful API for fetching the data from a MongoDB collection and return the results.

# How to use the API

 * **API Documentation**

   `https://documenter.getpostman.com/view/853749/UVsJvmc2`

 * **URL**

   `https://getir-assignment-rishabh.herokuapp.com/filter-data`

* **Method:**
  
   `POST`

* **Data Params**

  ```
    startDate, endDate, minCount, maxCount
  ```
   **Required:**
 
   `startDate=[Date]`
   `endDate=[Date]`
   `minCount=[Integer]`
   `maxCount=[Integer]`
   
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
     ``` 
    {  
       code:[Integer],  // 0
       msg:[String],    // Success
       records:[ Array of {"key":[String], "createdAt":[String],"totalCount":[Integer]}]        // Retrived records or record if any
    }
    ```

* **Error Response:**

  * **Code:** 400 RESOURCE BAD_REQUEST <br />
    **Content:** 
    ```
    {
     "code": 1,
     "msg": [string]
    }
    
    ```

  OR

  * **Code:** 404 RESOURCE NOT FOUND <br />
    **Content:**
      ```
      {
          "code": 2,
          "msg": [string]
      }
     ```

# Running the API locally 

```
git init https://github.com/Rishabhporwal/getir-assignment
git clone
npm install
npm start
```
The API will run on the localhost with port 3000

# Running the API locally with nodemon
```
npm run dev
```
# Testing command the API
```
npm test
```

# Author
@Rishabhporwal
