// declare before playing:
//     var munch = {};
// declare this:
//     munch.monk = this[t(597) + t(554)];
// at this breakpoint:
//     this[t(608) + "rmanc" + t(561) + "ger"] = new Fq(this)

var can_boost = true;

window.addEventListener("keydown", (e)=>{
    if(e.key == "f" || e.key == "F"){
        if(can_boost){
            munch.monk._0x4ab690(3000 + (Math.random() * 2000 - 1000));
            can_boost = false;
        }
    }
});

window.addEventListener("keyup", (e)=>{
    if(e.key == "f" || e.key == "F"){
        can_boost = true;
    }
});
