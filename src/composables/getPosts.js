import { ref, resolveComponent } from 'vue'

const getPosts = () =>{
    
    const posts = ref([])
    const error = ref(null)

    const load = async () =>{
      try{
        //simulate delay 
        await new Promise (resolve => {
          setTimeout(resolve, 1000)
        })
        
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok){
          throw Error('No Data Available')
        }
        posts.value = await data.json()
      }
      catch(err){
        error.value = err.message
      }
    }

    return { posts, error, load }
}

export default getPosts