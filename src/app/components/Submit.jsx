"use client";

export default function Submit({ diary, setDiary, year, month, day }) {
	//add "" to convert the numerical values of year, month, and day to strings before concatenation.
	const key = "" + year + month + day;

	// Use the || operator to default to an empty string if the key doesn't exist
	const entry = diary[key] || { text: "", disabled: false };

	/*The handleClick function now updates the state by
	creating a new object using the spread operator,
	ensuring that you preserve the existing entries
	and update the one for the current date.
	*/

	function handleClick(e) {
		e.preventDefault();

		setDiary((prevDiary) =>
			// Create a new object using the spread operator, updating the entry for the current date
			({ ...prevDiary, [key]: { ...entry, disabled: true } })
		);
	}

	return (
		<div>
			<textarea
				type="text"
				className={`text-box ${entry.disabled ? "blue-textarea" : ""}`}
				value={entry.text}
				onChange={(e) =>
					setDiary((prevDiary) =>
						// 	new Map(prevDiary).set(key, e.target.value))}
						({ ...prevDiary, [key]: { ...entry, text: e.target.value } })
					)
				}
				disabled={entry.disabled}></textarea>

			<br />

			<button
				className="submit"
				onClick={handleClick}
				disabled={entry.disabled}>
				Submit
			</button>
		</div>
	);
}
