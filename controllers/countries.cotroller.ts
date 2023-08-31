import { Request, Response } from "express";
import prisma from "../prisma/client";

// get all countries
export const getAllCountries = async (req: Request, res: Response) => {
  try {
    const countries = await prisma.country.findMany();
    res.send(countries);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// get single country

export const getSingleCountry = async (req: Request, res: Response) => {
  const { id } = req.params;

  const countryId = parseInt(id);

  try {
    const country = await prisma.country.findUnique({
      where: { id: countryId },
    });
    if (!country) {
      throw Error("Country not found");
    }

    res.send(country);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// add country

export const addCounty = async (req: Request, res: Response) => {
  const { country } = req.body;
  try {
    const newCountry = await prisma.country.create({
      data: {
        currency: country.currency,
        area: country.area,
        region: country.region,
        name: country.name,
        capital: country.capital,
        language: country.language,
        population: country.population,
        independeceDay: new Date(country.independeceDay),
      },
    });
    res.send(newCountry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// update country details
export const updateCountry = async (req: Request, res: Response) => {
  const { country } = req.body;

  const { id: _id } = req.params;

  const newId = parseInt(_id);

  try {
    const updatedCountry = await prisma.country.update({
      where: { id: newId },
      data: country,
    });

    res.send(updatedCountry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// delete a country
export const deleteCountry = async (req: Request, res: Response) => {
  const { id: _id } = req.params;
  const toDelId = parseInt(_id);
  try {
    const deletedCountry = await prisma.country.delete({
      where: {
        id: toDelId,
      },
    });

    console.log(deletedCountry);

    res.send(deletedCountry);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};
