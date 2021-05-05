const model = [{
  type: 'title',
  value: 'Hello Creator'
}, {
  type: 'text',
  value: 'some good text'
}, {
  type: 'columns',
  value: [
    '11111111',
    '22222222',
    '333333333'
  ]
}];

const $site = document.querySelector('#site');

model.forEach(block => {
  let html = '';

  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = ;
  } else if (block.type === 'columns') {
      html = 
      
      
  }

  $site.insertAdjacentHTML("beforeend", html);
}

function title(block) {
    return `<div class="row">
    <div class="col-sm">
      <h1>${block.value}</h1>
     </div>
  </div>`
}

