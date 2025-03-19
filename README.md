# School API

---

A basic school REST api created using express and MySql. The server is deployed in render and database in cloud console. The server is not performant. The POST request will create a school and the GET request will show the list of schools based on the users given latitude and longitude.

# [School API Live Link](https://school-api-56jt.onrender.com)

## Recommended Link

This link with query parameters will return a sorted list based on the given location. The sorted list is mentioned in the output section. You have to provide your own latitude and longitude to get a sorted list based on your location.

```
https://school-api-56jt.onrender.com/listSchools?latitude=23.763948&longitude=90.346436
```

## Object Structure:

```
{
    name:VARCHAR(255),
    address: VARCHAR(255),
    latitude: FLOAT(8,6),
    longitude: FLOAT(9,6)
}
```

## Existing Data:

I have already entered the existing data:

```
[
    {
        "id": 1,
        "name": "North South",
        "address": "Kuril, Dhaka.",
        "latitude": 23.816996,
        "longitude": 90.425217,
        "created": "2025-03-18T20:52:15.000Z"
    },
    {
        "id": 2,
        "name": "The Asian School",
        "address": "Dehradun, Uttarakhand 248006, India",
        "latitude": 30.322559,
        "longitude": 78.006439,
        "created": "2025-03-19T09:46:22.000Z"
    },
    {
        "id": 3,
        "name": "St. Xaviers Collegiate School",
        "address": "Kolkata, West Bengal 700016, India",
        "latitude": 22.5492,
        "longitude": 88.356102,
        "created": "2025-03-19T09:48:49.000Z"
    },
    {
        "id": 4,
        "name": "North South University",
        "address": "Gulshan, Dhaka, Bangladesh.",
        "latitude": 23.816996,
        "longitude": 90.425217,
        "created": "2025-03-19T09:50:45.000Z"
    },
    {
        "id": 5,
        "name": "University of Liberal Arts (ULAB)",
        "address": "Berbadh, Dhaka, Bangladesh.",
        "latitude": 23.759907,
        "longitude": 90.348579,
        "created": "2025-03-19T09:52:51.000Z"
    }
]
```

## SQL Query:

The given SQL Query is used to get liost of schools sorted based on users current location:

```
SELECT * FROM schools WHERE longitude ORDER BY (POW((lon-$lon),2) + POW((lat-$lat),2))
```

## Output of the SQL Query

From my location the existing data will be returned in the following way:

| ID  | Name                              |
| --- | --------------------------------- |
| 5   | University of Liberal Arts (ULAB) |
| 1   | North South                       |
| 4   | North South                       |
| 3   | St. Xaviers Collegiate School     |
| 2   | The Asian School                  |

## Packages:

The following packages are used:
| Name | Version |
| --- | --- |
| dotenv | ^13.4.7 |
| express | ^4.21.2 |
| nodemon | ^3.1.9 |
| mysql2 | ^3.13.0 |
