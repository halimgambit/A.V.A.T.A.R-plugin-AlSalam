export async function init () {
    await Avatar.lang.addPluginPak('AlSalam');
}


export async function action(data, callback) {

    try {

        const Locale = await Avatar.lang.getPak('AlSalam', data.language);

        const tblActions = {
            tellSalam: () => tellSalam(data.client, Locale)
        };

        info("AlSalam:", data.action.command, Locale.get("plugin.from"), data.client);

        if (tblActions[data.action.command]) {
            await tblActions[data.action.command]();
        }

    } catch (err) {
        error("Erreur plugin AlSalam:", err);
        if (data.client) Avatar.Speech.end(data.client);
    }

    callback();
}


const tellSalam = (client, Locale) => {

    const replies = Locale.get("speech.replies");

    Avatar.speak(replies, client);
};
