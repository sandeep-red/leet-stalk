const rp = require('request-promise');
var {parse} = require('node-html-parser');
const cheerio=require('cheerio')
const request=require('request')
const https=require('https')
function f(){
   
// request({
//     method: 'GET',
//     url: 'https://www.worldometers.info/coronavirus/'
// }, (err, res, body) => {

//     if (err) return console.error(err);

//     let $ = cheerio.load(body);

//     let div = $('tbody');
//     console.log(div['1'])
//     div=div['1']
//     div=div.first()

//     console.log(div.text());
// });
request.get('https://www.amazon.in/s?k=oneplus&ref=nb_sb_noss_2',(err,res)=>{
    const root = parse(res.body)
    const title = (root.querySelector('title').childNodes[0].rawText)
    const maindiv=(root.querySelector('.s-resprogresst-list.s-search-resprogressts.sg-row'))
    const div1=(maindiv.querySelector('.sg-col-inner'))
    console.log(maindiv.childNodes[5].querySelector('.sg-col-inner').querySelector('.celwidget.slot=SEARCH_RESprogressTS.template=SEARCH_RESprogressTS.widgetId=search-resprogressts.index=2').querySelector('.s-include-content-margin.s-border-bottom.s-latency-cf-section').querySelector('.a-section.a-spacing-medium').childNodes[1])
    //console.log(root.querySelector('#main_table_countries_today').childNodes[1].childNodes[1].rawText)
})
}


function f1(){
request.get('https://www.amazon.in/s?k=electronics',(err,res)=>{
    let $ = cheerio.load(res.body);
    let j=0
    let name
    let names=[]
    let main=$('div.s-resprogresst-list.s-search-resprogressts.sg-row')
    //console.log(main[0].children[1])
    //const phone=$('div.s-resprogresst-list.s-search-resprogressts.sg-row')[0].children[3].children[0].children[1].children[1].children[1].children[3].children[3].children[0].children[1].children[1].children[0].children[1].children[1].children[1].children[1].children[0].data
    main[0].children.forEach((link,i)=>{
        if(i%2!==0)
        if(link.children[0]!==undefined)
        //name=link.children[0].children[1].children[1].children[1].children[5].children[1].children[1].children[1].children[0].data
        name=link.children[0].children[1].children[1].children[1].children[3].children[3].children[0].children[1].children[1].children[0].children[1].children[1].children[1].children[1].children[0].data
        if(!names.includes(name)){
            names.push(name)
         console.log(name)
        }
          
       
         j++
     })
    // console.log($('div.s-resprogresst-list.s-search-resprogressts.sg-row').find('div'))
})}
// $('h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-4').each((i,h2)=>{
//     name = h2.children[1].children[1].children[0].data;
//     console.log(name);
// })

// })}

const f2=()=>{
    request.get('https://leetcode.com/gpu/',(err,res)=>{
        let $ = cheerio.load(res.body);
        let progress=$('div.panel.panel-default')
        // let mrs=progress[progress.length-1].children[3]
        let qname=[]
        let progress_data={}
        let check=$('div#base_content')
    //    console.log(mrs.children[1].children[1].children[0].data)
    //    console.log(mrs.children[1].children[3].children[0].data)
    //    console.log(mrs.children[1].children[5].children[0].data)
    //    console.log(mrs.children[1].children[7].children[0].data)

        // mrs.children.map((e,i)=>{
        //     if(i%2!==0){
        //         qname.push(e.children[5].children[0].data)
        //     }
        // })
        // console.log(qname)
        // progress[2].children[3].children.map((e,i)=>{
        //     if(i%2!==0){
        //         data=e.children[4].data.trim()+':'+e.children[1].children[0].data.trim()
        //         progress_data[e.children[4].data.trim()]=e.children[1].children[0].data.trim()
                
        //     }
        // })
        // console.log(progress_data)
        // console.log(progress[6].children[3].children[13].children[5].children[0].data)
        // console.log(progress[6].children[3].children[13].children[1].children[0].data)
        if(check[0].children[5]!==undefined)
        console.log("username doesnt exist")
        else
        console.log("exists")
        // else{
        // console.log(progress[2].children[3].children[1].children[4].data,':',progress[2].children[3].children[1].children[1].children[0].data)
        // console.log(progress[2].children[3].children[3].children[4].data,':',progress[2].children[3].children[3].children[1].children[0].data)
        // console.log(progress[2].children[3].children[5].children[4].data,':',progress[2].children[3].children[5].children[1].children[0].data)
        // }
    })
}
f2()


// $('h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-4').each((i,h2)=>{
//     name = h2.children[1].children[1].children[0].data;
//     console.log(name);
// }



// "start": "node ./bin/www