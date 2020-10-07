Vue.component('todoitem', {
  template: `
  <div class="todo-item">
    <div class="item-head" contenteditable="true">
      <h1>Title Here</h1>
    </div>
    <div class="item-main">
      <div class="item-date">
        <h4>Date/Time</h4>
      </div>
      <div class="item-desc" contenteditable="true">
        <p>This is the description</p>
      </div>
    </div>
    <div class="item-foot">
      <button class="todo-button button-delete"><span>Delete</span></button>
      <button class="todo-button button-complete"><span>Complete</span></button>
    </div>
  </div>
`
});


var app = new Vue({
  el: '#holder'
});

