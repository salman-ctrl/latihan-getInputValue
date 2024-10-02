// function getInputValue(){
//     let inputVal = document.getElementById('inputId').value;
//     let list = document.createElement('li');
//     list.textContent= inputVal;

//     let ul = document.querySelector('.listClass');
//     ul.appendChild(list);

//     document.getElementById('inputId').value='';
// }


let rowNumber =1;

function getInputValue(){
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const pekerjaan = document.getElementById('pekerjaan').value;

    if(nama && umur && pekerjaan){
        const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cellNo = newRow.insertCell(0);
        const cell1 = newRow.insertCell(1);
        const cell2=newRow.insertCell(2);
        const cell3 =newRow.insertCell(3);

        cellNo.textContent=rowNumber++;
        cell1.textContent=nama;
        cell2.textContent=umur;
        cell3.textContent=pekerjaan;

        document.getElementById('myForm').reset();
    }else{
        alert('isi semua input!');
    }
}




























// <script>
//         let rowNumber = 1;

//         function getInputValue() {
//             const nama = document.getElementById('nama').value;
//             const umur = document.getElementById('umur').value;
//             const pekerjaan = document.getElementById('pekerjaan').value;

//             if (nama && umur && pekerjaan) {
//                 const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
//                 const newRow = table.insertRow();
                
//                 const cellNo = newRow.insertCell(0);
//                 const cell1 = newRow.insertCell(1);
//                 const cell2 = newRow.insertCell(2);
//                 const cell3 = newRow.insertCell(3);

//                 cellNo.textContent = rowNumber++;
//                 cell1.textContent = nama;
//                 cell2.textContent = umur;
//                 cell3.textContent = pekerjaan;

//                 // Reset form
//                 document.getElementById('myForm').reset();
//             } else {
//                 alert('Mohon isi semua field!');
//             }
//         }