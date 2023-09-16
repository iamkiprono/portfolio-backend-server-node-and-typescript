const  express= require ("express") 
const  dotenv= require ("dotenv") 

const  mailRoutes = require("./routes/mailer.routes") ;
const cors = require("cors") 



const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use("/mail", mailRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
