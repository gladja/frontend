// The accounting department turned to the IT department with a request to help with the
//   financial report on the work of teams on the vendor side. It is known that the teams consist of
// a different number of specialists in different categories. It is also known that each category of
// specialists has its own fixed salary after taxes and this tax rate. Accounting must calculate
// the cost of the services for each specialty and the entire team. Your team leader has
// prepared a function template that will perform the task. You need to implement this function.
// Please note that some important hints are described in the comments to the code examples.
//     See details below

//where salaries is an object with more information about salaries and taxes by specialist
// categories; minimum specializations amount is 1, maximum up to 10; see template below

//where team is an array of objects represented by member of the team with name and
// specialization; minimal team size is 1, maximum up to 100; see template below

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

};

const teamSum = {};
const specialization = team1.map((item, idx) => item.specialization);
// teamSum = specialization.filter((item. idx))
console.log(specialization);

for (let spec of specialization) {
  teamSum[spec] = (teamSum[spec] || 0) + 1;
}
  console.log(teamSum);

// for (let [k, v] of Object.entries(salaries1)) {
//   // console.log(k, v.salary)
//   const totalBudgetManager = parseInt((v.salary / (100 - Number.parseInt(v.tax))) * 100);
//   console.log(totalBudgetManager);
// }

let totalBudgetManager = parseInt((salaries1.Manager.salary / (100 - Number.parseInt(salaries1.Manager.tax))) * 100);
totalBudgetManager *= teamSum.Manager;
console.log(`totalBudgetManager: ${totalBudgetManager}`);

let totalBudgetDesigner = parseInt((salaries1.Designer.salary / (100 - Number.parseInt(salaries1.Designer.tax))) * 100);
totalBudgetDesigner *= teamSum.Designer;
console.log(`totalBudgetDesigner: ${totalBudgetDesigner}`);

let totalBudgetArtist = parseInt((salaries1.Artist.salary / (100 - Number.parseInt(salaries1.Artist.tax))) * 100);
totalBudgetArtist *= teamSum.Artist;
console.log(`totalBudgetArtist: ${totalBudgetArtist}`);

const totalBudgetTeam = totalBudgetManager + totalBudgetDesigner + totalBudgetArtist;
console.log(totalBudgetTeam);


console.log(JSON.stringify(financeReport1));
