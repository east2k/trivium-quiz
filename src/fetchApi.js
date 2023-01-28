const URL = 'https://opentdb.com/api.php?'

const fetchApi = async ({ quizAmount, quizSettingsCategory, quizSettingsDifficulty, quizSettingsType }) => {
    try {
        const params = new URLSearchParams({
            amount: quizAmount,
            category: quizSettingsCategory,
            difficulty: quizSettingsDifficulty,
            type: quizSettingsType
        })

        const res = await fetch(URL + params);

        const json = await res.json();

        return JSON.parse(JSON.stringify(json), (_, value) => {
            return typeof value === "string" ? decodeHtml(value) : value
        });
    } catch (err) {
        console.log({ err });
    }
}

const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export default fetchApi;