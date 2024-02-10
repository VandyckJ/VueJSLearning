export default {
  beforeMount(el, binding) {
    let iClass = `fa fa-${binding.value.icon} text-green-400 text-xl`

    if (binding.value.right) {
      iClass += ' float-right'
    }
    el.innerHTML = `<i class="${iClass}"></i>`
  }
}
