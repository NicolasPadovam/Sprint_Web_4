const tbody = document.querySelector('#dadosConta');

document.querySelector('form').addEventListener('submit', function(e) {
    //cancelado evento submit
    e.preventDefault();
    
    
    const campos = [
        document.querySelector('#usuario'), 
        document.querySelector('#email'), 
        document.querySelector('#dataCadastro'), 
        document.querySelector('#tipoConta')
    ];
    console.log(campos);

    const tr = document.createElement('tr');
    campos.forEach(campo => {
        const td = document.createElement('td');
        
        td.textContent = campo.value;


        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    this.reset();

});