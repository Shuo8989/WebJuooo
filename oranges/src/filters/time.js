function date(v) {
    const time = new Date(v);
    return (time.getMonth() + 1).toString().padStart(2, "0") + "/" +
        (time.getDate()).toString().padStart(2, "0")
}
module.exports= date;
    
