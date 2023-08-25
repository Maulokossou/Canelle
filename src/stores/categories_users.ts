import {defineStore} from "pinia"
import {supabase} from '@/lib/supabase'
import {ref} from 'vue'
type category ={
    id_categorie?: number
    name: string,
    image:string
  
}

 export const useCategorieStore = defineStore("categorie", () => {
    const categories_users = ref<category[]>([]);
    async function initialise() {
      const { data, error } = await supabase
        .from("categories")
        .select("*");
      if (data) {
        categories_users.value = data;
        console.log(data);
        
      }
    }
    async function addCategory(categorie: category){
        const {data,error} = await supabase.from("categories_users").insert(categorie).select('*');
        if(data){
          categories_users.value.push(data[0]);
        }
      }
    
      return { categories_users,addCategory, initialise };
      
    }); 