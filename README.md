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

| Type   | Path                 | Notes                                                  | Example                       |
| ------ | -------------------- | ------------------------------------------------------ | ----------------------------- |
| POST   | `/api/auth/register` | register a new user user                               | [link](#post-apiauthregister) |
| POST   | `/api/auth/login`    | login an user                                          | [link](#post-apiauthlogin)    |
| &nbsp; |                      |                                                        |                               |
| POST   | `/api/recipes`       | create a new recipe; requires `title` and`ingredients` | [link](#post-apirecipes)      |
| PUT    | `/api/recipes/:id`   | updates a recipe given an `id` value; requires a value | [link](#put-apirecipe)        |
| DELETE | `/api/recipes/:id`    | deletes a recipe given an `id` value; required         | [link](#delete-apirecipe)     |
|
| GET    | `/api/users` |       | gets all users from database                            |
| GET    | `/api/users/:id`|    | gets back a specific user with given id                 |
| POST   | `/api/users/`   |    | creates a new user 									  |
| PUT    | `api/users/:id` |	| updates a user record 								  |
