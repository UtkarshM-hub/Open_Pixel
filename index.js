// getting the parent container
const container=document.getElementById("Container");

// Fetch data from data.json
fetch("./data.json").then(res=>res.json()).then(Data=>{
    let toBeRendered=``;
    Data.forEach(item=>{
        let currentEle;
        currentEle=`
        <div 
            onmouseout="MouseOutEvent(event.target)" 
            onmouseover="MouseOverEvent(event.target)" 
            style="background-color:${item.color}" 
            id="location_${item.Number}" 
            class="Square">
                <div id="info_${item.Number}" class="InfoContainer">
                    <p>#${item.name}</p>
                    <p>Number:${item.Number}</p>
                </div>
        </div>`;
        toBeRendered+=currentEle;
    });
    container.innerHTML=toBeRendered;
});

// Make name visibile
const MouseOverEvent=(e)=>{
    let id=e.id.split("_");
    document.getElementById(`info_${id[1]}`).style.display="block";
    document.getElementById(`location_${id[1]}`).style.transform="scale(1.1)";
    document.getElementById(`location_${id[1]}`).style.boxShadow="0px 0px 5px white";
}

// Make it invisible
const MouseOutEvent=(e)=>{
    let id=e.id.split("_");
    document.getElementById(`info_${id[1]}`).style.display="none";
    document.getElementById(`location_${id[1]}`).style.transform="scale(1)";
    document.getElementById(`location_${id[1]}`).style.boxShadow="0px 0px 5px transparent";
}


