document.addEventListener('DOMContentLoaded', async () => {

    const url = 'data.json'

    try {
      const response = await fetch(url)

//      console.log((await response.json()).msg)
//      console.log(response.headers.get('Date'))
      console.log(response.status)


    } catch (error) {
      console.log(error)
    }

})