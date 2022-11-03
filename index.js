import express from "express";
import cors from "cors";

const app = express();

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

app.get("/holidays", (req, res) => {
  res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
  let result = "Não, hoje não é feriado";
  const hoje = new Date().toLocaleDateString("en-us");
  const isHoliday = holidays.find((object) => object.date === hoje);

  if (isHoliday) {
    result = `Sim, hoje é feriado de ${isHoliday.name}`;
  }

  res.send(result);
});

// bonus
app.get("/holidays/:mes", (req, res) => {
  const mes = req.params.mes;

  const holidaysMonth = holidays.filter((object) => object.date.split("/")[0] === mes);

  res.send(holidaysMonth);
});

app.listen(5000, () => console.log("App running in port: 5000"));
