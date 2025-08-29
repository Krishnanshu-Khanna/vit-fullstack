import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({ message: "Hello from BFHL! 22BCT0046" });
});

app.post("/bfhl", (req, res) => {
	try {
		const data = req.body.data || [];
		let evens = [],
			odds = [],
			alphabets = [],
			specials = [],
			sum = 0,
			letters = [];

		data.forEach((item) => {
			if (/^-?\d+$/.test(item)) {
				let num = parseInt(item);
				if (num % 2 === 0) evens.push(item);
				else odds.push(item);
				sum += num;
			} else if (/^[a-zA-Z]+$/.test(item)) {
				alphabets.push(item.toUpperCase());
				letters.push(item);
			} else {
				specials.push(item);
			}
		});

		let concat = letters
			.join("")
			.split("")
			.reverse()
			.map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
			.join("");

		res.status(200).json({
			is_success: true,
			user_id: "krishnanshu_khanna_12102004", 
			email: "krishnanshu.khanna2022@vitstudent.ac.in",
			roll_number: "22BCT0046",
			odd_numbers: odds,
			even_numbers: evens,
			alphabets: alphabets,
			special_characters: specials,
			sum: sum.toString(),
			concat_string: concat,
		});
	} catch (e) {
		res.status(400).json({ is_success: false, error: e.message });
	}
});

app.listen(3000, () => console.log("Server running on 3000"));
