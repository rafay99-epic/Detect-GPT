const response = await fetch("https://rafay99-epic-hello-simpleai-chatgpt-detector--f8bb3b5.hf.space/run/predict", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		data: [
			"hello world",
		]
	})
});

const data = await data.json();
