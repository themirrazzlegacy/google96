//!wrt

var gqr={
    "results": "#center_col",
    "related": "#botstuff",
    "relatedLinks": ".EIaa9b"
};

var gqs={
    'search': `<svg height='24' height='24' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>`
}

var gsw=new w96.StandardWindow({
    title: "Google Search",
    body: `
    <style class="google-app-sty">.google-app-window{background-color:white !important;background:white !important;}
    .google-qry-input {
        outline:none;
        border:none;
        box-shadow:none;
    }
    .google-hbr-area {
        border-radius:20px;
        width:900px;
        border:1px solid black;
        padding: 5px;
        max-width:90%;
    }
    </style>
    <div style="display:flex;height:100%;width:100%;flex-direction:column;align-items: center;justify-content:center;" class='google-home'>
    <p style="margin:0;text-align:center;"><img style="width:300px;" src="https://www.businesstoday.com.my/wp-content/uploads/2018/11/7bae1202-5f75-42af-957d-4d6fed98f2b5-Google-Logo.png"></p>
    <div style="margin:0;align-items:center;justify-content:center;display:inline-flex;flex-direction:row;" class='google-hbr-area'>
      ${gqs.search}
      <input style="width:100%;font-size:17px;" class='google-qry-input' />
    </div>
    <div class="google-carbon-free">
    carbon neutral since 2007
    </div>
</div>
<div class='google-results' style="width:100%;height:100%;display:none;flex-direction:column;">
<div class="bruh-area" style="width:100%;height:100%;">
</div>
</div>`,
    center: true,
    taskbar:true,
    windowClass:'google-app-window'
})
gsw.show();
var sw=gsw;
var gbe=gsw.wndObject;
gbe.querySelector('.google-carbon-free').onclick=function(){
    w96.sys.execCmd('internete',['https://themirrazz.github.io/carbonfree.html']).then().catch(function(){w96.sys.execCmd('iexploder',['https://themirrazz.github.io/carbonfree.html'])});
}

var ghe=gbe.querySelector('.google-home');
var gsr=gbe.querySelector('.google-results');
var ghi=gbe.querySelector('.google-home .google-qry-input');
ghi.onkeydown=function(e){
    if(e.keyCode==13){
        showSearchResults(ghi.value);
        ghi.value="";
    }
}

function showSearchResults(qry){
    var xhr=new XMLHttpRequest()
    xhr.onreadystatechange=function(){
        if(this.readyState==4){
            var dom=document.createElement("BruhDom");
            dom.innerHTML=this.responseText;
            ghe.style.display='none';
            gsr.style.display='flex';
            gsr.querySelector('.bruh-area').innerHTML=dom.querySelector(
                gqr.results
            ).innerHTML;
            AAAAA()
        }
    }
    xhr.open("GET",'https://www.google.com/search?igu=1&q='+encodeURIComponent(qry));
    xhr.send()
}

function AAAAA(){
    var a=gsr.querySelectorAll("a")
    for(var i=0;i<a.length;i++){
        a[i].onclick=function(e){
e.preventDefault();
            w96.sys.execCmd(
                'internete',[this.href]
            ).then(function(){}).catch(function(){
                w96.sys.execCmd(
                    'iexploder',
                    this.href
                )
            })
        }
    }
}
