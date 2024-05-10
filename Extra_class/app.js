const koa= require('koa');
const app=new koa();
const port=8080;

app.use((ctx,next) => {
    ctx.request.custom="taohid";
    console.log
    ctx.status=400;
    ctx.body={name: "taohid"};

});

app.listen(8080, () => {
    console.log(`running on port: http://localhost:${port}`);
});
  