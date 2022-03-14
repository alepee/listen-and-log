import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
const app = new Koa();

app.use(bodyParser());
app.use(async (ctx) => {
    const body = ctx.request.body;
    console.log(body);

    ctx.body = 'Hello world'
    ctx.status = 200;
});
app.listen(3880);
