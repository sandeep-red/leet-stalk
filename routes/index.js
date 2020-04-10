var express = require('express');
var router = express.Router();
const cheerio=require('cheerio')
const request=require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end(JSON.stringify({"error":"goto /get data niggahhh"}))
})
router.get('/getdata',(req,res,next)=>{
  const username=req.query.username
  if(username===undefined){
    res.end(JSON.stringify({"error":"query param missing"}))
  }
  else{
  request.get('https://leetcode.com/'+username+'/',(err,response)=>{
    let qname={}
let j=0
let qdets=[]
let progress_data={}
    let $ = cheerio.load(response.body);
    let check=$('div#base_content')
     if(check[0].children[5]!==undefined)
         res.end(JSON.stringify({"error":"username doesnt exist"}))
      else{
         let progress=$('div.panel.panel-default')
    let mrs=progress[progress.length-1].children[3]
    progress[2].children[3].children.map((e,i)=>{
      if(i%2!==0){
          progress_data[e.children[4].data.trim()]=e.children[1].children[0].data.trim()
          
      }
  })
  console.log(parseInt(progress_data['Solved Question'].replace(' / 1407','')))
  if(parseInt(progress_data['Solved Question'].replace(' / 1407','')))
  {
    mrs.children.map((e,i)=>{
        if(i%2!==0){
          e.children.map((f,k)=>{
            if(k%2!==0)
            qdets.push(f.children[0].data.trim())
          })
          qname[j]=qdets
            j++;
            qdets=[]
        }
        
    })
    console.log(qname)
   
    res_data=[]
    res_data.push({"error":"no error"})
    res_data.push(progress_data)
    res_data.push(qname)
    
  res.end(JSON.stringify(res_data))
  }
  else{
    res.end(JSON.stringify({"error":"empty data"}))
  }
}
});
  
  }
})
module.exports = router;
