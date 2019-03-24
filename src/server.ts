import express, {Request, Response} from "express";
const app = express();
app.get("/", (req:Request, res:Response) => {
  res.send("Hello world");
});
app.get("/time", (req: Request, res:Response) => {
  res.send(`current time is ${new Date()}`);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
