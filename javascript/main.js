document.querySelector('.search-btn').addEventListener('click', function() {
  this.parentElement.classList.toggle('open');
  this.previousElementSibling.focus();
  // previousElementSibling: return element trước đó của element được chỉ định, trong một cấp độ cây
})