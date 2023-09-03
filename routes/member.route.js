/** load express js */
const express = require(`express`)

/** create object of express */
const app = express()

/** load obat controller */
const memberController = require(`../controllers/member.controller`)

// panggil middleware untuk authorization
const authorization = require(`../middleware/authorization`)

/** allow route to read urlencoded data */
app.use(express.urlencoded({ extended: true }))

/** create route for access pack's data */
app.get("/", authorization.cekUser,memberController.showDataMember)

/** create route for show add pack view */
app.get("/add", authorization.cekUser,memberController.showAddPage)

/** create route for process of add new obat */
app.post("/add", authorization.cekUser,memberController.processInsert)

/** create route for show edit pack view */
app.get("/edit/:id", authorization.cekUser,memberController.showEditPage)

/** create route for process edit obat */
app.post("/edit/:id",authorization.cekUser,memberController.processUpdate)
/** :id -> name of paramter URL */

/** create route for process delete obat */
app.get("/delete/:id", authorization.cekUser,memberController.processDelete)

/** export object "app" to another file */
module.exports = app