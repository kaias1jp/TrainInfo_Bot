const { Masto } = require("masto");
const { BOT_INSTANCE, BOT_TOKEN } = process.env;



class Mastodon {
	/**
	 * Mastoにログインします
	 * @return {Promise<Masto>}
	 */
	static async getMastoInstance () {
		return await Masto.login({ uri: BOT_INSTANCE, accessToken: BOT_TOKEN });
	}
}

module.exports = Mastodon;