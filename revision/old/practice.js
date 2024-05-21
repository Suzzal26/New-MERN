//write a js function to truncate the large text, description builder
const truncate = (text, maxLength) => {
  return text.length > maxLength
    ? text.substring(0, maxLength - 3) + "..."
    : text;
};
const originalText =
  "Jinhyuk, a gaming Nutuber, was the only person who saw the ending of the game [Tower of Trials].However, when the game’s popularity declined, it became difficult for him to continue making a living as a gaming Nutuber.";
const truncatedText = truncate(originalText, 20);
console.log(truncatedText);

//Write a js function that generate how long the reading duration of that blog will be.
//read duration: 10 sec
const duration = () => {
  const text =
    "Jinhyuk, a gaming Nutuber, was the only person who saw the ending of the game [Tower of Trials].However, when the game’s popularity declined, it became difficult for him to continue making a living as a gaming Nutuber.";
  const wordsPerminute = 183;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerminute);
  console.log(`${time} minute read`);
};
duration();

//Fuction to create date formatter
//May 2nd 2024=> published a day ago
//use packet called momentjs/luxon/dayfn.js

//js function to search for a blog
const blog = [
  { title: "Solo Max Level Newbie" },
  { title: "Trash of Count's Family" },
  { title: "The Beginning After The End" },
  { title: "Barbarian Quest" },
];
const search = (webtoon) => {
  const regex = new RegExp(webtoon, "i");
  return blog.filter((entry) => regex.test(entry.title));
};
const wwwebtoon = prompt("Enter the webtoon you wanna search");
if (wwwebtoon) {
  const searchResult = search(wwwebtoon);
  console.log("Search result:", searchResult);
} else {
  console.log("No search query provided.");
}
