client.on("guildUpdate", async (reawEski, reawYeni) => {
reawYeni.fetchAuditLogs().then(async (audit) => {
var reawUye = audit.entries.first().executor
if(reawEski.vanityURLCode !== reawYeni.vanityURLCode) {
request({
method: "PATCH",
url: `https://discord.com/api/guilds/${reawYeni.id}/vanity-url`,
headers: {
Authorization: `Reawen ${client.token} tokeni de birakalim suraya`},
json: {code: `${reawEski.vanityURLCode}`}});
reawYeni.members.cache.get(reawUye.id).ban({reason: "kNaves knvs knv kn k diye url degiscez herhalde aq"})
}
})
})
