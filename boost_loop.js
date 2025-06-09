// declare before playing:
// var munch = {};
// declare this:
//     munch.monk = this[t(597) + t(554)];
// at this breakpoint:
//     this[t(608) + "rmanc" + t(561) + "ger"] = new Fq(this)

var boost_loop = null;

window.addEventListener("keydown", (e)=>{
    if(e.key === "g" || e.key === "G"){
        if(boost_loop === null){
            boost_loop = setInterval(async()=>{
                setTimeout(()=>{
                    munch.monk._0x4ab690(3000 + (Math.random() * 2000 - 1000));
                }, Math.random() * 33);
            }, 200);
        }
    }
});

window.addEventListener("keyup", (e)=>{
    if(e.key === "g" || e.key === "G"){
        clearInterval(boost_loop);
        boost_loop = null;
    }
});
