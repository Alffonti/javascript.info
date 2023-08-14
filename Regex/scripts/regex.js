let expression = /(?<=<body.*?>)/

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`

console.log(str.match(expression))

str = str.replace(expression, `$&$&<h1>Hello</h1>$&`)

alert(str)
