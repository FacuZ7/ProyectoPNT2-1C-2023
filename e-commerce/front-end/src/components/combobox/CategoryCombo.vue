<template>
    <div>
    <select v-model="selectedCategoryId" class="category-cbo">
      <option v-for="category in categories" :value="category.id" :key="category.id">
        {{ category.Description }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent} from 'vue';
import axios from 'axios'

    export default defineComponent({
        props: ['modelValue'],
        data(){
            return {
                categories: [],
                selectedCategoryId: this.value
            }
        },
        async mounted(){
            try {
                const resp = await axios.get('http://localhost:8081/category') 
                this.categories = resp.data.resp
            } catch (err) {
                console.log(err)
            }
        },
        watch: {
            value(newVal) {
                this.selectedCategoryId = newVal;
            },
            selectedCategoryId(newVal) {
                this.$emit('update:modelValue', newVal);
            }
        }
    });
   
</script>

<style>
    .category-cbo{
        width: 227px;
        height: 25px;
    }
</style>

