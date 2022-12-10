1. Initialize a JS Porject
```
npm init -y
```
2. Move inside the Project
```
cd \<Project Name>
```
3. Install snowpack module
```
npm install snowpack --save-dev
```
4. Create an index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Starter Snowpack App" />
    <title>Starter Snowpack App</title>
  </head>
  <body>
    <h1>Welcome to JavaScript Template</h1>
    <script type="module" src="/index.js"></script>
  </body>
</html>

```
5. insert `start` and `go` in package.json

```
    "scripts": {
        "start": "snowpack dev",
        "go": "node index.js",
        "test": "echo 'Error: no test specified' && exit 1"
    },
```


5. Create index.js file with the simple log

```
console.log("Hello Template console")
```

6. Run the index.js in a browser
```
npm run start
```

7. Open up a Browser and go to `http://localhost:8080/`

8. check Chrome console for "Hello Template console"
![Screenshot 2022-12-09 at 5 55 57 PM](https://user-images.githubusercontent.com/13372496/206823134-449ad2a1-caf4-4296-ba88-23540488c645.png)


9. Check from Terminal
```
npm run go
```
![Screenshot 2022-12-09 at 5 55 26 PM](https://user-images.githubusercontent.com/13372496/206823142-8738336f-6df1-4a78-b6b6-a6c2ea954dc5.png)
