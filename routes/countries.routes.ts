import express from "express";
import {
  addCounty,
  deleteCountry,
  getAllCountries,
  getSingleCountry,
  updateCountry,
} from "../controllers/countries.cotroller";

const countriesRouter = express.Router();

countriesRouter.get("/", getAllCountries);
countriesRouter.get("/:id", getSingleCountry);
countriesRouter.post("/", addCounty);
countriesRouter.put("/:id", updateCountry);
countriesRouter.delete("/:id", deleteCountry);

export default countriesRouter;
