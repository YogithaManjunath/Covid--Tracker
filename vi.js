const asyncExample = async function(){
    try{
        const data = await fetch(' https://corona.lmao.ninja/v2/countries');
        const jsonData = await data.json();
        const tableBody=document.querySelector('.tableBody');
        jsonData.forEach(country =>{
            const tr=document.createElement('tr');
            const countryRow =` <td> ${ country.country}</td> <td> ${country.cases}</td><td> ${country.active}</td><td>${country.critical}</td> <td>${country.deaths}</td>`;
            tr.innerHTML=countryRow;
            tableBody.appendChild(tr);

        });

    }catch(err){
        console.log(err);
    }
} 
asyncExample();