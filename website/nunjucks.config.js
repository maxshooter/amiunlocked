;['TITLE', 'KVDB_URL'].forEach(key => {
  if (!process.env[key]) {
    throw new Error(`Environment variable "${key}" is required.`)
  }
})

module.exports = {
  root: './',
  data: {
    gaId: process.env.GA_ID,
    title: process.env.TITLE,
    kvdbUrl: process.env.KVDB_URL,
  },
}
