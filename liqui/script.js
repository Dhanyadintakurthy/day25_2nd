document.body.innerHTML = `
<div class="heading">PUBLIC APIS</div>
<div class="container">
<button class="liqui" onclick="liqui()">LIQUI</button>
<div class="liquicontainer"></div>
</div>
 `;

async function liqui() {
    var liqui = await fetch('https://api.1inch.exchange/v4.0/1/liquidity-sources');
    var data1 = await liqui.json();
    console.log(typeof(data1))
    console.log(data1.protocols);
    data1 = data1.protocols;
    const liquicontainer = document.querySelector(".liquicontainer");
    liquicontainer.innerHTML = "";

    Array.prototype.forEach.call(data1, para => {
    liquicontainer.innerHTML += `
    <div class="container2">
    <div class="id">TITLE : ${para.title}</div>
    <div class="container4">
    <div class="id">ID : ${para.id}</div>
    <img src="${para.img}"></img>
    </div>
    </div>
    `;
    document.querySelector(".liquicontainer").style.display = "block";
    });

}
