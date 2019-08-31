export default {
  props: ['album'],

  methods: {
    toggle: function() {
      // Doesn't work, why?

      // this.isActive = !this.isActive;

      alert('hello world')
    }
  },
  // Adding filter to capitalise header
  filters: {
    capitalize: function(value) {
      value = value.toString()
      return value.toUpperCase()
    }
  }
}
