client.on("guildUpdate", async (reawEski, reawYeni) => {
reawYeni.fetchAuditLogs().then(async (audit) => {
var reawUye = audit.entries.first().executor
if(reawEski.vanityURLCode !== reawYeni.vanityURLCode) {
reawYeni.members.cache.get(reawUye.id).ban({reason: "kNaves knvs knv kn k diye url degiscez herhalde aq"})
}
})
})
