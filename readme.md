1. Download mongodb from Homebrew with -> `brew tap mongodb/brew`
2. Update Homebrew `brew update`
3. Install mongodb from the downloaded tab `brew install mongodb-community@5.0`
4. Start mongodb `brew services start mongodb-community@5.0`
5. Stop mongodb ` brew services stop mongodb-community@5.0`
6. To see the what brew is running `brew services list`

7. Connect to local running mongodb server `mongosh`

## Insert a document with ->
 ``` 
 db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
) 
```
- if no collection is created this will create a collection and insert one document

## To query for all documents `db.inventory.find()`



