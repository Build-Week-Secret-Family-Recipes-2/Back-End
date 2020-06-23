# Back-End

## Schema

#### Users

| Field     | Type    | Notes                   |
| --------- | ------- | ----------------------- |
| id        | integer | _primary key_           |
| email     | string  | _required_ and _unique_ |
| password  | string  | _required_              |
| username  | string  | _required_              |
| firstname | string  | _required_ and _unique_ |
| lastname  | string  | _required_ and _unique_ |

#### Recipes

| Field        | Type    | Notes                                      |
| ------------ | ------- | ------------------------------------------ |
| id           | integer | _primary key_ and _autoincrements_         |
| userId       | string  | _required_                                 |
| title        | string  | name of recipe                             |
| source       | text    | who created the recipe                     |
| ingredients  | string  | food or components needed for recipe       |
| instructions | text    | steps to make recipe                       |
| categories   | string  | which region or culture the recipe is from |

## API

BASE URL:

test account:

```json
{
	"email": "tester@email.com",
	"username": "test123",
	"password": "test",
	"firstname": "johnny",
	"lastname": "test"
}
```

#### Table of Contents


## users

| REQUEST    | URL                 | Notes                                    |
| --------- | ---------------------| ---------------------------------------- |
| GET       | `/api/users`         | gets all users from database             |
| GET       | `/api/users/:id`     | gets back a specific user with given id  |
| POST      | `/api/users/`        | creates a new user                       |
| PUT       | `api/users/:id`      | updates a user record                    |
								  

## recipes

| REQUEST    | URL                 | Notes                                              |
| --------- | ---------------------| ---------------------------------------------------|
| POST       | `/api/recipes`       | create a new recipe;`title`&`ingredients` a must  |           
| PUT        | `/api/recipes/:id`   | updates a recipe given an `id` value; required    |
| DELETE     | `/api/recipes/:id`   | deletes a recipe given an `id` value; required    | 
| GET        | `/from/:id`       	| gets all recipes from a user given the `id`		|
| GET        | `/api/recipes/`      | gets all recipes                                  |



## Auth

| REQUEST    | URL                 | Notes                                    |
| --------- | ---------------------| ---------------------------------------- |
| POST      | `/api/auth/register`| registers a new user                      |
| POST      | `/api/auth/login`   | users logs in                             |
