# qurable-challenge-api

## 🔌 Start

Just run:

```
node .\app.js 
```

## 📌 Endpoints
## | Get items
In this request you can pass any term (partial or full) to be filtered by `id, name or description`.
## A request example:

GET `/api/items/?q=Woo`

Response:
```
{
    "items":
    [
        {
            "id":"6588",
            "name":"Woodard Suarez",
            "description":"Eiusmod labore eiusmod cupidatat mollit voluptate sint nostrud enim ex mollit. Laboris fugiat eu ea quis cillum voluptate ullamco cupidatat pariatur. Do incididunt ad consequat excepteur irure. Adipisicing labore ad ipsum ad veniam nostrud irure consectetur est. Id nulla ea non nostrud reprehenderit est aliquip. Elit cupidatat anim minim ut aliqua do commodo ad id labore consequat.\r\n",
            "price":1234.56,
            "image":"http://localhost:3000/assets/product-image.jpg",
            "creator":{
                "creator_id":"101",
                "creator_name":"El Burgues",
                "creator_image":"http://localhost:3000/assets/creator-3.png"}
                }
        ]
}
```

## | Get items by id
In this request you can get a item by id.
## A request example:

GET `/api/items/3245`

Response:
```
{
    "items":
    [
        {
            "id":"3245",
            "name":"Juliette Guerrero",
            "description":"Proident in nulla duis irure Lorem aliquip laborum voluptate esse irure culpa adipisicing pariatur nisi. Nostrud mollit id elit in consectetur commodo minim cillum nulla officia do. Minim tempor consectetur sit aliquip do eiusmod Lorem velit tempor ex sint. Reprehenderit consequat ullamco deserunt cupidatat velit consequat qui adipisicing sit magna Lorem exercitation. Elit ut ut velit mollit ipsum dolore id enim esse dolor labore ullamco eu. Amet nostrud consectetur do minim in nulla sint et officia dolore enim deserunt velit. Aliquip adipisicing culpa reprehenderit pariatur qui irure dolor fugiat labore proident est ipsum cillum.\r\n",
            "price":1234.56,
            "image":"http://localhost:3000/assets/product-image.jpg",
            "creator":{
                "creator_id":"101",
                "creator_name":"El Burgues",
                "creator_image":"http://localhost:3000/assets/creator-3.png"}
                }
        ]
}
```

## | Get creators items
In this request you can get items from a specific creator
## A request example:

GET `/api/creators/101`

Response:
```
{
   "items":[
      {
         "id":"3245",
         "name":"Juliette Guerrero",
         "description":"Proident in nulla duis irure Lorem aliquip laborum voluptate esse irure culpa adipisicing pariatur nisi. Nostrud mollit id elit in consectetur commodo minim cillum nulla officia do. Minim tempor consectetur sit aliquip do eiusmod Lorem velit tempor ex sint. Reprehenderit consequat ullamco deserunt cupidatat velit consequat qui adipisicing sit magna Lorem exercitation. Elit ut ut velit mollit ipsum dolore id enim esse dolor labore ullamco eu. Amet nostrud consectetur do minim in nulla sint et officia dolore enim deserunt velit. Aliquip adipisicing culpa reprehenderit pariatur qui irure dolor fugiat labore proident est ipsum cillum.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      },
      {
         "id":"3246",
         "name":"Jaime Reed",
         "description":"Minim duis commodo enim velit. Eiusmod consectetur id aute duis excepteur voluptate tempor dolor commodo adipisicing ullamco nulla. Anim ea sit laborum velit proident laboris ex reprehenderit sint aliquip. Incididunt ea do nulla id officia commodo ea dolore. Deserunt commodo proident adipisicing exercitation non eiusmod dolore aute. Anim nisi incididunt dolore laboris nostrud eiusmod sint consequat ullamco.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      },
      {
         "id":"6588",
         "name":"Woodard Suarez",
         "description":"Eiusmod labore eiusmod cupidatat mollit voluptate sint nostrud enim ex mollit. Laboris fugiat eu ea quis cillum voluptate ullamco cupidatat pariatur. Do incididunt ad consequat excepteur irure. Adipisicing labore ad ipsum ad veniam nostrud irure consectetur est. Id nulla ea non nostrud reprehenderit est aliquip. Elit cupidatat anim minim ut aliqua do commodo ad id labore consequat.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      },
      {
         "id":"3457",
         "name":"Pearl Daugherty",
         "description":"Dolore esse pariatur in tempor occaecat ex elit qui occaecat pariatur incididunt eiusmod ad amet. Lorem duis cupidatat sunt laborum consequat fugiat occaecat. Enim aliqua do pariatur dolore aliquip Lorem fugiat. Magna ullamco quis exercitation esse dolor cupidatat tempor labore ipsum incididunt. Magna laborum ea sit deserunt qui dolor fugiat fugiat Lorem et nostrud id.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      },
      {
         "id":"8593",
         "name":"Tracie Johns",
         "description":"Nulla deserunt id laboris pariatur occaecat Lorem aute culpa nulla sint. Eiusmod aliquip fugiat duis labore culpa. Irure laboris aliqua amet enim quis. Amet esse elit non eu incididunt elit et velit et sint non aliqua enim. Pariatur sint duis culpa elit quis aliqua ex voluptate id. Aute nisi magna et laborum duis anim.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      },
      {
         "id":"7452",
         "name":"Shawna Lott",
         "description":"Incididunt incididunt deserunt elit nulla cupidatat. Laboris nulla dolore duis sunt adipisicing sunt eu pariatur id exercitation magna velit incididunt. Est fugiat irure do enim aliqua adipisicing magna anim id. Consectetur voluptate adipisicing et nostrud dolore cupidatat labore pariatur culpa nostrud. Commodo dolor excepteur aute incididunt adipisicing pariatur eu deserunt veniam est quis adipisicing.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      },
      {
         "id":"23490",
         "name":"Boban Naira",
         "description":"Incididunt incididunt deserunt elit nulla cupidatat. Laboris nulla dolore duis sunt adipisicing sunt eu pariatur id exercitation magna velit incididunt. Est fugiat irure do enim aliqua adipisicing magna anim id. Consectetur voluptate adipisicing et nostrud dolore cupidatat labore pariatur culpa nostrud. Commodo dolor excepteur aute incididunt adipisicing pariatur eu deserunt veniam est quis adipisicing.\r\n",
         "price":1234.56,
         "image":"http://localhost:3000/assets/product-image.jpg",
         "creator":{
            "creator_id":"101",
            "creator_name":"El Burgues",
            "creator_image":"http://localhost:3000/assets/creator-3.png"
         }
      }
   ]
}
```