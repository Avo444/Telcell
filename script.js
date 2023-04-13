// Databases
let loggedInfo = {
	tel: "",
	userIndex: null,
	currentIndex: null
}

let beelineUsers = [
	{
		ogtater: "Vlad",
		hamar: "033-33-33-33",
		balance: 100	
	},
	{
		ogtater: "Ruben",
		hamar: "033-44-55-67",
		balance: 100	
	},
	{
		ogtater: "Avo",
		hamar: "091-82-26-27",
		balance: 10000
	}
];

let araratBankUsers = [
	{
		ogtater: "Vlad",
		hamar: "51718123713",
		balance: 100	
	},
	{
		ogtater: "Ruben",
		hamar: "14235198700",
		balance: 100	
	},
	{
		ogtater: "Avo",
		hamar: "12465647387",
		balance: 10000
	}
];

let telcellUsers = [
	{
		name: "Vlad",
		surname: "Navasardyan",
		hamar: "033-33-33-33",
		balance: 0
	},
	{
		name: "Ruben",
		surname: "Shahverdyan",
		hamar: "091-91-91-91",
		balance: 0
	},
	{
		name: "Avetiq",
		surname: "Manukyan",
		hamar: "091-82-26-27",
		balance: 0
	}
];

const telcell = {
	users: telcellUsers,
	balance: 0
}

	

///// functions
function showTelcellBalance() {
	if(loggedInfo.tel == "") {
		let userTel = prompt("Greq dzer heraxosahamar@: 0XX-XX-XX-XX");
		checkLogin(userTel)
	}
	else alert(`Dzer Telcell hashvin arka e ${telcellUsers[loggedInfo.userIndex].balance} dram`);
}


function checkLogin(tel) {
	telcellUsers.forEach((user, i) => {
		if(tel == user.hamar) {
			loggedInfo.tel = tel;
			loggedInfo.userIndex = i;
			alert("Duq hajoxutyamb mutq goreciq hashiv")
			return;
		}
	});
}


function checkBanking(checkHamar, base) {
	base.forEach((data, i) => {
		if(data.hamar == checkHamar) {
			loggedInfo.currentIndex = i;
			return;
		}
	});
	if(loggedInfo.currentIndex != null) return true;
	return false;
}


function paymant(id) {
	if(loggedInfo.userIndex == null && id != 1) alert("Duq mutq cheq gorcel hashiv");
	else {
		if(id != 1 && telcellUsers[loggedInfo.userIndex].balance < 1) alert("Duq chuneq bavarar gumar poxancum katarelu hamar")		
		else {
			switch(id) {			
				case 1: {
					if(loggedInfo.userIndex == null) {
						let hamar = prompt("Greq heraxosahamar");
						if(checkBanking(hamar, telcellUsers)) {
							let money = +prompt("Gumari chap@");
							if(money < 1) {
								alert("Duq cheq grel bavarar gumari chap")
							}
							else {
								telcellUsers[loggedInfo.currentIndex].balance += money;
								loggedInfo.currentIndex = null;
								alert("Hajoxutyamb hamalrvel e");
							}	
						}						
					}
					else {
						let money = +prompt("Gumari chap@");
						telcellUsers[loggedInfo.userIndex].balance += money;
						alert("Hajoxutyamb hamalrvel e");	
					}				
					break;
				}
				case 2: {
					let heraxosahamar = prompt("Greq dzer heraxosahamar@");
					if(checkBanking(heraxosahamar, beelineUsers)) {
						let money = +prompt("Gumari chap@:\nDuq uneq "+telcellUsers[loggedInfo.userIndex].balance+" dram");
						if(telcellUsers[loggedInfo.userIndex].balance < 1 || telcellUsers[loggedInfo.userIndex].balance < money) {
							alert("Duq chuneq bavarar gumar poxancum katarelu hamar")
						}
						else {
							beelineUsers[loggedInfo.currentIndex].balance += money;
							telcellUsers[loggedInfo.userIndex].balance -= money;
							loggedInfo.currentIndex = null;
							alert("Hajoxutyamb hamalrvel e "+money+" dramov");
						}
					}
					break;
				}
				case 3: {
					let hashvehamar = prompt("Greq dzer hashvehamar@");
					if(checkBanking(hashvehamar, araratBankUsers)) {
						let money = +prompt("Gumari chap@:\nDuq uneq "+telcellUsers[loggedInfo.userIndex].balance+" dram\nMinordavchar 400 dram");
						if(telcellUsers[loggedInfo.userIndex].balance < 1 || telcellUsers[loggedInfo.userIndex].balance < money) {
							alert("Duq chuneq bavarar gumar poxancum katarelu hamar")
						}
						else {
							araratBankUsers[loggedInfo.currentIndex].balance += money-400;
							telcellUsers[loggedInfo.userIndex].balance -= money;
							telcell.balance += 400;
							
							alert("Hajoxutyamb hamalrvel e "+money+" dramov");
							alert("hashiv@ kazmum e "+araratBankUsers[loggedInfo.currentIndex].balance+" dram");
							alert("Telcell hashiv@ kazmum e "+telcell.balance+" dram");

							loggedInfo.currentIndex = null;
						}
					}
					break;
				}
				default: {
					alert("Sxalmunq e texi unecel");
				}
			}
		}
	}
}



let date = {
	day: new Date().getDate(),
	week: new Date().getDay(),
	month: new Date().getMonth(),
	time: {
		hours: new Date().getHours(),
		minutes: new Date().getMinutes(),
	},
}
let weekName, monthName;

switch(date.week) {
	case 0: {
		weekName = "Կիրակի";
		break;
	}
	case 1: {
		weekName = "Երկուշաբթի";
		break;
	}
	case 2: {
		weekName = "Երեքշաբթի";
		break;
	}
	case 3: {
		weekName = "Չորեքշաբթի";
		break;
	}
	case 4: {
		weekName = "Հինգշաբթի";
		break;
	}
	case 5: {
		weekName = "Ուրբաթ";
		break;
	}
	case 6: {
		weekName = "Շաբաթ";
		break;
	}
	default: {
		weekName = "Not found";
	}
}

switch(date.month) {
	case 0: {
		monthName = "Հունվար";
		break;
	}
	case 1: {
		monthName = "Փետրվար";
		break;
	}
	case 2: {
		monthName = "Մարտ";
		break;
	}
	case 3: {
		monthName = "Ապրիլ";
		break;
	}
	case 4: {
		monthName = "Մայիս";
		break;
	}
	case 5: {
		monthName = "Հունիս";
		break;
	}
	case 6: {
		monthName = "Հուլիս";
		break;
	}
	case 7: {
		monthName = "Օգոստոս";
		break;
	}
	case 8: {
		monthName = "Սեպտեմբեր";
		break;
	}
	case 9: {
		monthName = "Հոկտեմբեր";
		break;
	}
	case 10: {
		monthName = "Նոյեմբեր";
		break;
	}
	case 11: {
		monthName = "Դեկտեմբեր";
		break;
	}
	default: {
		monthName = "Not found";
	}
}



setInterval(() => {
	time.innerText = `${date.time.hours}:${date.time.minutes}`;
	week.innerText = weekName;
	datetime.innerText = `${date.day} ${monthName}`;
}, 60000)