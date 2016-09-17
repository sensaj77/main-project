export default {
  switchQuestion: (response) => {
    return {
      type: 'SWITCH_QUESTION',
      payload: { response: response }
    }
  }
}