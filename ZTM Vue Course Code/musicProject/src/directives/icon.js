export default {
  beforeMount(el, binding) {
    let iClass = `fa fa-${binding.value} text-xl`
    if (binding.arg === 'full') {
      iClass = binding.value
    }
    if (binding.modifiers.right) {
      iClass += ' float-right'
    }
    if (binding.modifiers.yellow) {
      iClass += ' text-yellow-400'
    }
    el.innerHTML = `<i class="${iClass}"></i>`
  }
}
