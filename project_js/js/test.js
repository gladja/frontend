const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];

const financeReport1 = function calculateTeamFinanceReport(salaries1, team1) {
  // const result = Object.values(team1);
  console.log(team1[0].name);
};
// for (let team of team1) {
const teamSum = [];
const specialization = team1.map((item, idx) => item.specialization);
// teamSum = specialization.filter((item. idx))
console.log(specialization);

// }

for (let [k, v] of Object.entries(salaries1)) {
  // console.log(k, v.salary)
  const totalBudgetManager = parseInt(
    (v.salary / (100 - Number.parseInt(v.tax))) * 100
  );
  // totalBudgetManager.toFixed(1)
  Math.round(totalBudgetManager);
  console.log(totalBudgetManager);
}

// const teams = Object.entries(team1);
//
// for (let [key, value] of teams) {
//     console.log(value.specialization)
// }
//
// for (let [key, value] of Object.entries(team1)) {
// console.log(key, value.specialization)
// }

console.log(JSON.stringify(financeReport1));
