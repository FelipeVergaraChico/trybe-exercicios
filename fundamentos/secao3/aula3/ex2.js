let clientesTrybeBank = ['Ada', 'John', 'Gus'];

let naoCadastrados = ['josé', 'carlos', 'noel', 'felipe']
// escreva aqui sua função


function adicionarClientes (cliente) {
    
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
  } else {
    return 'O parametro passado deve ser do tipo string'
  }

}

function excluirCliente (cliente) {
    let clienteEncontrado = false

    if (typeof cliente === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'cliente excluida(o) com sucesso'
            }

        }
    } else{
        return 'O parametro passado deve ser do tipo string'
    }

}

console.log(adicionarClientes(true));
adicionarClientes('carlos');
console.log(clientesTrybeBank);

excluirCliente(false);
excluirCliente('Ada');
console.log(clientesTrybeBank)


