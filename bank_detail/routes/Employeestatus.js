var express= require('express')
var router= express.Router()
router.get('/result',function(req,res){
    var id= req.query.employee_id
    var name=''
    var designation=''
    var salary=0
    var image=''
    var DA=0
    var HRA=0

    var stat=[{employeeid:001, name:'Satya Prakash', designation:'Manager',salary:50000, image:'gajodhar.jpg'},{employeeid:002, name:'Rupesh Bhati', designation:'Supervisor',salary:20000,image:'gajodhar.jpg'}]
     var result= stat.map((item)=>
     {
           if(item.employeeid==id)
           {
            name=item.name
            designation= item.designation
            salary= item.salary
            image= item.image
           }
     })
     if(designation=='Manager')
     {
         DA=0.5
         HRA=0.15
     }
     else if(designation=='Supervisor')
     {
        DA=0.35
        HRA=0.1
     }
     var DAcut=parseInt(salary*DA)
     var HRAcut=parseInt(salary*HRA)
     var total= parseInt(salary)-DAcut-HRAcut
   
     res.render('result',{name:name,designation:designation,salary:salary,DA:DA,HRA:HRA,total:total})
})
module.exports=router;
