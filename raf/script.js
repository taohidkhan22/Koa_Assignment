const koa= require('koa');
const bodyParser= require('koa-bodyparser');

const Validator = require('validatorjs');
const port=8080;
const app= new koa();

app.use(bodyParser());



const rules = {
    name: 'required',
    email: 'required|email',
    age: 'min:18',
  };

// Example usage
app.use((ctx)=>{
    const data= ctx.request.body;
    const valid= new Validator(data,rules);
    if(valid.passes()){
        ctx.status = 200;

        console.log('validation passes');

    }
    else
    {
        console.log("not pases");
    }
});
app.listen(8080, ()=>{
    console.log(`running on port: http://localhost:${port}`);
});


// const validation = new Validator(data, rules);

// // Check if validation passes
// if (validation.passes()) {
//   console.log('Validation passed!');
// } else {
//   console.log('Validation failed. Errors:', validation.errors.all());
// }
