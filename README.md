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
| username  | string  | _required_              |

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
	"password": "test"
}
```

#### Table of Contents

| Type   | Path                 | Notes                    | Example                       |
| ------ | -------------------- | ------------------------ | ----------------------------- |
| POST   | `/api/auth/register` | register a new user user | [link](#post-apiauthregister) |
| POST   | `/api/auth/login`    | login an user            | [link](#post-apiauthlogin)    |
| &nbsp; |                      |                          |                               |
