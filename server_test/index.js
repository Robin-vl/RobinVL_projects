const Pool = require('pg').Pool;
const Joi = require('joi'); // classe
const express = require('express');
const app = express();
app.use(express.json()); // anders req.body = undefined returns 'middelware'
// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'eindwerk',
  password: 'wachtwoord123',
  port: 5432,
  // ssl: {
  //   rejectUnauthorized: false
  // }
})

/* const host = process.env.DB_HOST || '127.0.0.1';
const user = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASS || 'wachtwoord123';
const database = process.env.DB_DATABASE || 'eindwerk';
 */
const courses = [
  {id: 1, name: 'course 1'},
  {id: 2, name: 'course 2'},
  {id: 3, name: 'course 3'}
]
app.get('/', (req, res)=>{
  res.send('Hello world');
});
app.get('/api/test', (req, res)=>{
  res.send(courses);
});
app.get('/api/test/:id', (req,res)=>{
  const course = courses.find(c=>
    c.id === parseInt(req.params.id)
  )
  if(!course){
    res.status(404).send('Course with ID is not found'); // if false (booleanwaarde)
  }else{
    res.send(course);
  }
})

app.post('/api/test',(req,res)=>{
  const { error } = validateCourse(req.body)
// speciale manier => anders result.error
  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }
  const course={
    id: courses.length +1,
    name: req.body.name // parsing JSON objects!!!
  };
  courses.push(course);
  res.send(course);
})

app.put('api/test/:id',(req,res)=>{
  const course = courses.find(c=>
    c.id === parseInt(req.params.id)
  )
  if(!course){
    res.status(404).send('Course with ID is not found'); // if false (booleanwaarde)
  }else{
    res.send(course);
  };

  const { error } = validateCourse(req.body)
// speciale manier => anders result.error

  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course);

});
function validateCourse(course){
  const schema = { name: Joi.string().min(3).length>3};
  const result = Joi.validate(course,schema);
  return result;
}


//PORT environmental variable 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('listening on port ' + port)
})