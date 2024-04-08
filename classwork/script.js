const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const validator = require("validatorjs");
const port = 8080;
const app = new Koa();

app.use(bodyParser());

const rules = {
  id: "required|integer",
  name: "required|string",
  email: "required|email",
  age: "required|integer|min:15",
};

app.use((ctx) => {
  const data = ctx.request.body;

  const valid = new validator(data, rules);
  if (valid.passes()) {
    ctx.status = 200;
    ctx.body = `
                ID: ${data.id}
                Name: ${data.name} 
                Email: ${data.email} 
                Age: ${data.age}`;
  } else {
    ctx.status = 400;
    ctx.body = "Wrong data entry";
  }
});
app.listen(8080, () => {
  console.log(`running on port: http://localhost:${port}`);
});
