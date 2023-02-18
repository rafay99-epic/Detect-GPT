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

const message= `
The Importance of Time: Understanding and Managing Time for Productivity
Time is one of the most valuable resources we have, yet it is also one of the most limited. Unlike money or other resources, time is finite and cannot be replenished. It is the great equalizer; everyone has the same amount of time in a day, and how we use that time determines our productivity, success, and well-being.

In this post, we'll explore the concept of time, why it is important, and how you can manage your time more effectively to be more productive and achieve your goals.

What is Time?
Time is a fundamental concept that is central to our understanding of the world around us. It is the measure of the duration of events and the sequence in which they occur. Time is measured using units such as seconds, minutes, hours, days, weeks, months, and years, and it is used to organize our lives and our activities.

Why is Time Important?
Time is important because it is a scarce resource. We only have a limited amount of time in a day, and we need to use that time effectively to accomplish our goals and be productive. Time is also important because it is finite; we cannot create more time or go back in time to redo things we have already done. Therefore, we need to make the most of the time we have and use it wisely.

Effective time management is essential for productivity and success. By managing our time effectively, we can prioritize our tasks, focus on what is important, and accomplish more in less time. Effective time management also reduces stress and anxiety, as we feel more in control of our lives and are better able to balance our work and personal responsibilities.

Managing Your Time
Effective time management involves several key strategies. Here are some tips for managing your time more effectively:

1. Set Goals
One of the most important aspects of effective time management is goal setting. By setting clear, specific goals, you can focus your efforts and prioritize your time. When setting goals, it is important to make them realistic and achievable, and to break them down into smaller, more manageable tasks.

2. Prioritize Your Tasks
Once you have set your goals, it is important to prioritize your tasks. Start by identifying the most important tasks that need to be done and focus on them first. This will help you to make progress on your most important goals and reduce the stress and anxiety that comes with feeling overwhelmed by a long to-do list.

3. Manage Your Distractions
Distractions are one of the biggest obstacles to effective time management. To manage your distractions, try to eliminate or minimize them as much as possible. This might involve turning off your phone, closing your email inbox, or finding a quiet place to work.

4. Use Time Management Tools
There are a variety of time management tools available to help you manage your time more effectively. These might include calendars, to-do lists, project management software, and time tracking apps. Find the tools that work best for you and use them to help you stay organized and focused.

5. Take Breaks
Finally, it is important to take breaks throughout the day to help you stay focused and productive. Research has shown that taking regular breaks can actually increase productivity and creativity, as well as reduce stress and anxiety.

Conclusion
Time is one of the most valuable resources we have, and effective time management is essential for productivity, success, and well-being. By setting clear goals, prioritizing tasks, managing distractions, using time management tools, and taking breaks, you can manage your time more effectively and achieve your goals. Remember, time is finite, so use it wisely and make the most of


`;

query({"inputs": message}).then((response) => {
	console.log(JSON.stringify(response));
});
