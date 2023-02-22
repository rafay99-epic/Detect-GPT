async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Hello-SimpleAI/chatgpt-detector-roberta",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

const message= `False Data Injection Attack
February 13, 2023

blog
 
machine-learning
Introduction:
False data injection is a type of cyber attack that occurs when an attacker alters or introduces incorrect data into a control system or its communication network. This type of attack can have serious consequences for the operation of the control system, such as loss of control, equipment damage, and even safety incidents.

False data injection attacks can take many forms, including modifying sensor readings, injecting false control commands, or altering historical data records. These attacks can be carried out by insiders or outsiders with various motives, ranging from theft and sabotage to espionage and cyber warfare.

Type of False Data Injection Attacks:
Type 01:
One common type of false data injection attack is the manipulation of sensor readings. This type of attack can be carried out by altering the readings of sensors used in control systems to measure physical parameters, such as temperature, pressure, and flow rate. By introducing false readings into the control system, the attacker can cause the system to make incorrect decisions, leading to improper operation and potentially dangerous conditions.`;

query({"inputs": message}).then((response) => {
	console.log(JSON.stringify(response));
});
