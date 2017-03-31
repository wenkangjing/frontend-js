

## Backend

```
GET  /books/ .... collection.fetch();
POST /books/ .... collection.create();
GET  /books/1 ... model.fetch();
PUT  /books/1 ... model.save();
DEL  /books/1 ... model.destroy();
```

- A List/Column in GUI = a json file = `list_{id}.json`
- A List contains multiple Cards (`List` is `CardCollection`) 


## Frontend

### styles

https://trello.com/about/branding#logos-and-assets


### notification

www.trello.com notify user if subscribed items changed by other user or about to due

TrelloLite implement it in a different way to fit single-user requirement
- notify if item about to due
- changed appear as activities in notificaiton bar
- drop the activities in menu bar

### search




## Journey

MongoDB vs JSON
  - JSON

normalized vs denormalized
- JSON can't do proper query
- save denormalized data directly to json file






