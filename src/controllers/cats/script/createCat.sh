curl http://localhost:3000/cats \
  -X POST \
  -H "content-type: application/json" \
  -d '{ "cat" : { "name": "Garfield", "age": 20} }'
