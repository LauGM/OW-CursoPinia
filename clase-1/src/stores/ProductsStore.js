import {defineStore} from 'pinia';
import {ref, computed} from 'vue'

export const useProductStore = defineStore('products',()=>{
    //state
    const stock = ref(1);
    const products = ref([
        {
            id:1,
            name:"mouse"
        }
    ])
    //getters
    const isEmpty = computed(()=> products.value.length == 0);
    
    const orderByIdDesc=computed(()=>{
        const sortedDesc = products.value;
        return sortedDesc.sort((a,b)=>b.id -a.id)
    });
    const orderByIdAsc=computed(()=>{
        const sortedAsc = products.value;
        return sortedAsc.sort((a,b)=>a.id -b.id)
    });

    //actions
    const fillProducts = async() => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.value=data;
        stock.value = products.value.length;
    }

    return {stock, products, isEmpty, fillProducts, orderByIdDesc, orderByIdAsc}
})