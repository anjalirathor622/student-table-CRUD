//let form1 = document.createElement('form');
//let inpt = document.createElement('input');
//document.body.appendChild(form1).appendChild(inpt);
let stname = document.querySelector("input[name='name']");
let surname = document.querySelector("input[name='surname']");
let addr = document.querySelector("input[name='adress']");
            
let table = document.querySelector("table#stbl > tbody");
//console.log(table);

let stinfo = ()=>{
    //console.log(stname.value);
    //console.log(surname.value);
    //console.log(addr.value);
    table.innerHTML += `<tr>
                            <td>${stname.value}</td>
                            <td>${surname.value}</td>
                            <td>${addr.value}</td>
                            <td>
                                <button onclick="readdata(this)">view</button>
                                <button >edit</button>
                                <button onclick="dltdata(this)">delete</button>
                            </td>
                        </tr>`
    stname.value = surname.value = addr.value = '';
    }
            
let dltdata = (st)=>{
    //alert('ok')
                
    let dlt = confirm('do you want to delete this data')
    //console.log(typeof dlt)
    if(dlt){
       //console.log(st.closest('tr'))
        st.closest('tr').remove();
        }
    }
                