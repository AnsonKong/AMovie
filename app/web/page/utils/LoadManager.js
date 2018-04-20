import Vue from 'vue'

export default vm => {
  return (url, params, cb) => {
    const store = vm.$store

    store.commit('setLoading', true)
    let resultJson
    let resultErr
    Vue.jsonp(url, params)
      .then(json => {
        resultJson = json
      })
      .catch(err => {
        vm.$message({
          showClose: true,
          message: `加载失败 ${err.status} ${err.statusText}`,
          type: 'error'
        });
        resultErr = err
      })
      .finally(() => {
        cb(resultErr, resultJson)
        store.commit('setLoading', false)
      })
  }
}
