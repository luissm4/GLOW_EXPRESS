// Añadir fila en tabla dinámica
window.addRow = function(){
  const k = document.getElementById('k');
  const a = document.getElementById('a');
  const b = document.getElementById('b');
  if(!k.value || !a.value || !b.value) return;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${k.value}</td><td>${a.value}</td><td>${b.value}</td>
                  <td><button class="btn btn-sm btn-outline-danger" onclick="delRow(this)">Quitar</button></td>`;
  document.getElementById('cmp-body').appendChild(tr);
  k.value = a.value = b.value = '';
};

window.delRow = function(btn){
  btn.closest('tr').remove();
};

// Volteo de tarjetas
document.addEventListener('click', (e)=>{
  const card = e.target.closest('.flip-card');
  if(card){ card.classList.toggle('flipped'); }
});
