const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");

const user = {
    name: {
        first : firstName,
        last: lastName,
    },
    language: language
};

if (user.language == "English"){
    alert(`Nice to meet you ${user.name.first} ${user.name.last}`);
}
else if (user.language == "Korea"){
    alert(`Mannaseo Bangawoyo ${user.name.first} ${user.name.last}`);
}
else if (user.language == "Jepang"){
    alert(`Hajimemashite ${user.name.first} ${user.name.last}`);
}
else if (user.language == "Jawa"){
    alert(`Uns auf Sie ${user.name.first} ${user.name.last}`);
}
else {
    alert(`Senang bertemu dengan anda ${user.name.first} ${user.name.last}`);
}