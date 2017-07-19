var faker = require("faker");
var _ = require("lodash");
var fs = require("fs");

var result = {
	people: _.times(100, function (n) {
		return {
			id: n,
			name: faker.name.findName(),
			avatar: faker.internet.avatar(),
			title: faker.name.jobTitle(),
			phone: faker.phone.phoneNumber,
			team: "Development-Macys",
			company: {
				name: faker.company.companyName(),
				phrase: faker.company.catchPhrase()
			}
		}
	})
};
	
fs.writeFile("db.json", JSON.stringify(result));
console.log(result);
return result;