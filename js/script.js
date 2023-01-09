//let form1 = document.createElement('form');
//let inpt = document.createElement('input');
//document.body.appendChild(form1).appendChild(inpt);
let stname = document.querySelector("input[name='name']");
let surname = document.querySelector("input[name='surname']");
let addr = document.querySelector("input[name='adress']");
            
let table = document.querySelector("table#stbl > tbody");
//console.log(table);

// Create Student table
let stinfo = ()=>{
    //console.log(stname.value);
    //console.log(surname.value);
    //console.log(addr.value);
    let savedata = confirm('do you want to save this information');
    if(savedata){
        if(stname.value !== "" && surname.value !== "" && addr.value !== "")
                {
                    table.innerHTML += `<tr>
                                            <td>${stname.value}</td>
                                            <td>${surname.value}</td>
                                            <td>${addr.value}</td>
                                            <td>
                                                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="readdata(this)">view</button>
                                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editdata(this)">edit</button>
                                                <button class="btn btn-danger" onclick="dltdata(this)">delete</button>
                                            </td>
                                        </tr>`
                    stname.value = surname.value = addr.value = '';
                }else{
                    //alert('please, enter your data!!!!');
                     //alert('Please fill the forms with all values');
                     document.querySelector('div.myError').innerHTML = ` <div class="alert alert-danger" alert-dismissible" role="alert">
                                                                            Please Fill all the information  !!!
                                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                        </div>`;
                }
        }
    }

    
// Delete Student Data
let dltdata = (st)=>{
    //alert('ok')
                
    let dlt = confirm('do you want to delete this data')
    //console.log(typeof dlt)
    if(dlt){
       //console.log(st.closest('tr'))
        st.closest('tr').remove();
        }
    }


//View Student Data
let readdata = (elem)=>{
    //alert("ok");
    var elemt = elem.closest('tr');
    let name =  elemt.querySelector('td:first-child').innerHTML;
    let surname = elemt.querySelector('td:nth-child(2)').innerHTML;
    let addr =  elemt.querySelector('td:nth-child(3)').innerHTML;
    //console.log(name);
    //console.log(surname);
    //console.log(addr);
    document.querySelector('div.modal-body ul.myul > li:first-child').innerHTML = name;
    document.querySelector('div.modal-body ul.myul > li:nth-child(2)').innerHTML = surname;
    document.querySelector('div.modal-body ul.myul > li:last-child').innerHTML = addr;
    
}
              
//Update Student data
let editdata = (edit)=>{
    //alert('ok');
    let mb = document.querySelector('div.modal-body');
    //console.log(mb);
    editdt = edit.closest('tr');
    document.querySelector('.modal-title').innerHTML = 'Edit Student Information';

    let nm = editdt.querySelector('td:first-child').innerHTML;
    let snm = editdt.querySelector('td:nth-child(2)').innerHTML;
    let ad = editdt.querySelector('td:nth-child(3)').innerHTML;
    //console.log(nm);
    //console.log(snm);
    //console.log(ad);
    //console.log(document.querySelector('input[name="name"]'));
    mb.innerHTML = `<form id="myform">
                        <input class="form-control" name='name' value="${nm}" type="text" placeholder="enter your name"/>
                        <input class="form-control" name="surname" value='${snm}' type="text" placeholder="enter your surname"/>
                        <input class="form-control" name="adress" value='${ad}' type="text" placeholder="enter your adress"/>
                        <br>
                        <input type="button" class="btn btn-primary" value="update" onclick="update(this)"/>
                    </form>`
    //document.querySelector('div.modal-footer').innerHTML = `<button type="button" class="btn btn-success" data-bs-dismiss="modal" onclick="ok(this)">submit</button>`

}   

let update = (updt) => {
    let newData = updt.previousElementSibling;
    //console.log(newData.value);
    let newname = newData.previousElementSibling.previousElementSibling.previousElementSibling.value;
    let newsurname = newData.previousElementSibling.previousElementSibling.value;
    let newaddr = newData.previousElementSibling.value;
    console.log(newname);
    console.log(newsurname);
    console.log(newaddr);

    //console.log(editdt);
    editdt.querySelector('td:first-child').innerHTML = newname;
    editdt.querySelector('td:nth-child(2)').innerHTML = newsurname;
    editdt.querySelector('td:nth-child(3)').innerHTML = newaddr;

    updt.closest('div.modal').querySelector('button.closemodal').click();

}

