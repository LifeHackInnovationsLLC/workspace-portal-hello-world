import express from "express"
const app = express()
const PORT = process.env.PORT || 3000
const BRANCH = process.env.BRANCH_NAME || "unknown"
const COLOR = process.env.BG_COLOR || "#1d4ed8"
const MESSAGE = process.env.HELLO_MESSAGE || "PRODUCTION build"
app.get("/", (_req, res) => {
  res.send(`<html><body style="background:${COLOR};color:#fff;font-family:system-ui;padding:4rem;text-align:center;"><h1>${MESSAGE}</h1><p>branch=${BRANCH}</p><p>port=${PORT}</p></body></html>`)
})
app.get("/health", (_req, res) => res.json({ ok: true, branch: BRANCH }))
app.listen(PORT, () => console.log(`listening on ${PORT}`))
