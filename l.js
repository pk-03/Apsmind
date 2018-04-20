document.querySelector(".crpt").addEventListener("click", () => {
    console.log("crpt clickef....")
    document.querySelector(".development").style.display = "none";
    document.querySelector(".placement").style.display = "none";
    document.querySelector(".workshop").style.display = "none";
    document.querySelector(".corperate").style.display = "flex";


});
document.querySelector(".wrk").addEventListener("click", () => {
    console.log("crpt clickef....")
    document.querySelector(".development").style.display = "none";
    document.querySelector(".placement").style.display = "none";
    document.querySelector(".workshop").style.display = "flex";
    document.querySelector(".corperate").style.display = "none";


});
document.querySelector(".dev").addEventListener("click", () => {
    console.log("crpt clickef....")
    document.querySelector(".development").style.display = "flex";
    document.querySelector(".placement").style.display = "none";
    document.querySelector(".workshop").style.display = "none";
    document.querySelector(".corperate").style.display = "none";


});
document.querySelector(".plc").addEventListener("click", () => {
    console.log("crpt clickef....")
    document.querySelector(".development").style.display = "none";
    document.querySelector(".placement").style.display = "flex";
    document.querySelector(".workshop").style.display = "none";
    document.querySelector(".corperate").style.display = "none";


});