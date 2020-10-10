// function _classCallback (instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError('Cannot call a class as a function')
//   }
// }

// const Dispatcher = function Dispatcher () {
//   const _this = this

//   _classCallback(this, Dispatcher)

//   this.callbacks = {}
//   this.data = {}

//   this.update = function (namespace) {
//     (_this.callbacks[namespace] || []).forEach(callbacks => {
//       try {
//         const data = _this.data[namespace]
//         callbacks(data)
//       } catch (e) {
//         callbacks(undefined)
//       }
//     })
//   }
// }

class Dispatcher {
  callbacks = {}
  data = {}

  update (namespace) {
    (this.callbacks[namespace] || []).forEach(callbacks => {
      try {
        const data = this.data[namespace]
        callbacks(data)
      } catch (e) {
        callbacks(undefined)
      }
    })
  }
}

export default Dispatcher