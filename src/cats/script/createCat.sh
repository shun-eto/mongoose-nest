curl http://localhost:3000/cats \
  -X POST \
  -H "content-type: application/json" \
  -d '{ "name": "Garfield", "age": 20 , "breed" : "test-breed" }'
