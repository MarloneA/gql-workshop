# React-Blog(Apollo React and GraphQL)

## TECHNOLOGIES USED
- React Apollo

### Clone the project

### Active the virtual environment
```
$ pip install pipenv
$ pipenv shell
```

### Install the requirements
```
$ yarn install
```

### STARTING THE APPLICATION

```
yarn start
```

**Basic queries**

Get all users with user details
```
{
  users {
    id
    username
    email
  }
}
```

Get a single user
```
{
  user(userId: $id) {
    id
    username
    email
  }
}
$id is an integer number(positive)
```

Retrieve all articles
```
{
  articles {
    id
    title
    content
    category {
      name
      description
    }
  }
}
```

Retrieve a single article
```
{
  article(articleId: $id) {
    id
    title
    content
    category {
      name
      description
    }
  }
}
$id is an integer number(positive)
```

Retrieve articles by specific user
```
{
  userArticles(userId: $id) {
    id
    title
    content
    category {
      name
      description
    }
  }
}
$id is an integer number(positive)
```

**Basic mutations**

Create user
```
mutation {
  createUser(username: "name", email: "email", password: "password") {
    user {
      id
      username
      email
    }
  }
}
```

Create an article category
```
mutation {
  createCategory(name: "category name", description: "Text description") {
    category {
      id
      name
      description
    }
  }
}
```

Create an article
```
mutation {
  createArticle(title: "Article title", content: "Text content", userId: 1, categoryId: 1) {
    article {
      id
      title
      content
    }
  }
}
```

Edit an article
```
mutation {
  editArticle(articleId: 1, title: "New title", content: "New content"){
    article{
      id
      title
      content
    }
  }
}
```

Delete an article
```
mutation {
  deleteArticle(articleId: 1){
    article{
      id
    }
  }
}
```
