const statusToDo = "To Do";
const statusInProgress = "In Progress";
const statusDone = "Done";
const priorityHigh = "high";
const priorityLow = "low";
const priorities = ["high", "low"];
const statuses = ["To Do", "In Progress", "Done"];

const list = [
	{
		id: 1,
		name: "create a post",
		status: statusToDo,
		priority: priorityLow,
	},
	{
		id: 2,
		name: "test",
		status: statusDone,
		priority: priorityHigh,
	},
	{
		id: 3,
		name: "make a bed",
		status: statusInProgress,
		priority: priorityHigh,
	}
]

function changeStatus(name, status = statusToDo) {
	if (statuses.includes(status)) {
		const changeIndex = list.findIndex(function (item) {
			return item.name === name;
		});
		if (changeIndex !== -1) {
			list[changeIndex].status = status;
		}
	} else {
		console.log(`${status} is unknown status. Please, try: To Do, In Progress, Done`);
	}
}

function addTask(name, status = statusToDo, priority = priorityLow) {
	if (priorities.includes(priority) && statuses.includes(status)) {
		list.push({
			id: list.length + 1,
			name: name,
			status: status,
			priority: priority,
		});
	} else {
		console.log(`${priority} is unknown priority. Please, try: high, low.`);
	}

}

function deleteTask(name) {
	const deleteIndex = list.findIndex(function (item) {
		return item.name === name;
	});
	if (deleteIndex !== -1) {
		list.splice(deleteIndex, 1);
		list.map(function (item, index) {
			item.id = index + 1;
		});
	} else {
		console.log("The task cannot be deleted. Please enter an existing task.");
	}
}


function showBy(key) {
	if (key === "status") {
		statuses.forEach(function (component) {
			console.log(`${component}:`);
			filterTask(key, component);
		});
	} else if (key === "priority") {
		priorities.forEach(function (component) {
			console.log(`${component}:`);
			filterTask(key, component);
		});
	}
}

function filterTask(key, component) {
	let filtered = list.filter(function (item) {
		if (item[key] === component) {
			console.log(`  ${item.name},`)
			return true;
		}
	});
	if (!filtered.length) {
		console.log("  -");
	}
}

addTask("buy milk");
addTask("go to the gym", "In Progress");
addTask("read a book", "In Progress", "medium");
addTask("cook dinner");
changeStatus("create a post", "Done");
changeStatus("cook dinner", "sometimes");
deleteTask("make a bed");
deleteTask("buy milk");
deleteTask("cook dinner");

showBy("status");
showBy("priority");
