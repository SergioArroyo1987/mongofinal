const {Router}=require("express");
const router=Router();
const profesionalCtrl=require("../controller/profesional.controller");


router.get("/profesional",profesionalCtrl.getprofesional);
router.get("/profesional/:name",profesionalCtrl.getuno);
router.post("/profesional",profesionalCtrl.postprofesional);
router.put("/profesional",profesionalCtrl.putprofesional);







module.exports=router;