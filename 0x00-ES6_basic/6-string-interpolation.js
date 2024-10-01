export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `San Francisco is a city in the US state of California. In ${year}, the city had a total budget of ${budget.income} with a GDP of ${budget.gdp} and a per capita income of ${budget.capita}.`;
}
