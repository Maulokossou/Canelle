<template>
  <body>
    <header><Navbar></Navbar></header>
    <main>
      <div class="wrapper">
        <Banner></Banner>

        <section class="categories">
          <div class="container">
            <div class="cat_wrapper">
              <div class="cat_left">
                <div class="all_categories">
                  <div class="all_categories_content" >
                    <Category  v-for="element in categories_users" :categorie="element" />
                    
                  </div>
                </div>
              </div>
              <div class="cat_right">
                <div class="add_category">
                  <div class="add_animation">
                    <img src="@/assets/images/anime1.avif" alt="" />
                  </div>
                  <div class="add_button">
                    <button @click="modal = true">Ajouter</button>
                  </div>
                </div>

                <div
                  class="overlay"
                  :class="{ open: modal === true, close: modal === false }"
                >
                  <div class="modal">
                    <div class="modal_content">
                      <div class="modal_header">
                        <h2>Ajouter une catégorie</h2>
                        <button @click="modal = false" class="modal_close">
                          X
                        </button>
                      </div>
                      <div class="modal_body">
                        <div class="modal_item">
                          <label for="name">Nom</label>
                          <div class="input_name">
                            <input
                              type="text"
                              id=""
                              pattern="(?=.*?[A-Z])(?=.*?[a-z])"
                              class="name"
                              
                           />
                          </div>
                        </div>
                        <div class="button">
                          <button type="submit" class="record">
                            Enregistrer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer><Pagefooter></Pagefooter></footer>
  </body>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Pagefooter from "@/components/Pagefooter.vue";
import Banner from "@/components/Banner.vue";
import { RouterView } from "vue-router";
import {categories_users} from "@/api/database";
import Category from "@/components/Category.vue";
import { storeToRefs } from "pinia";
import { supabase } from "@/lib/supabase";
import { defineStore } from "pinia";
import { useCategorieStore } from "@/stores/categories_users";
import image9 from "@/assets/images/user.jpg";
const {addCategory} = useCategorieStore()
const modal = ref();

/* const category = ref<category>({
  name:'',
  image:''
}) */


</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-weight: 400px;
  font-size: 14px;
  box-sizing: border-box;
  position: relative;
}

.container {
  max-width: 1040px;
  margin: auto;
}
.banner {
  padding: 40px;
  overflow-x: hidden;
}
.cat_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 80px;
}
.add_category {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
body {
  overflow-x: hidden;
  z-index: -9px;
}
.add_button button {
  padding: 10px 20px;
  color: white;
  border: 2px solid transparent;
  border-radius: 9px;
  background-color: #324d9f;
  cursor: pointer;
  position: absolute;
  top: 29px;
}
.add_button button:hover {
  background-color: #112254;
}
.add_animation {
  width: 300px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
}
.add_animation img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333333d3;

  display: none;
}

.open {
  display: block;
}

.close {
  display: none;
}
.modal {
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 30%;
  height: 30%;
  z-index: 100px;
}
.modal_header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.modal_header h2,
.modal_item label {
  font-size: 20px;
  user-select: none;
  text-transform: uppercase;
}
.modal_body {
  padding: 20px;
}
.modal_item input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 9px;
  border: 1px solid rgb(140, 126, 126);
  margin: 20px 0;
}
.button {
  display: flex;
  justify-content: center;
}
button.record {
  padding: 5px 10px;
  margin-top: 15px;
  border-radius: 9px;
  border: 1px solid transparent;
  background-color: #143aac;
  color: white;
}
.all_categories {
  display: flex;
  justify-content: center;
  max-width: 600px;
}
.all_categories_users {
  /*   display: flex;
  justify-content: center; */
  max-width: 600px;
}

.all_categories_content_users {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
.all_categories_content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 30px;
}
/* .category_item_content_users{
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
} */
.category_content {
  width: 100px;
  height: 100px;
  padding: 6px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: white;
  color: white;
  margin: 20px;
  display: block;
  gap: 30px;
}
.category_title h2 {
  margin-top: 5px;
  font-size: 20px;
  display: flex;

  justify-content: center;
  text-decoration: none;
}
.category_content_image img {
  width: 85px;
  height: 85px;
  background-color:  #131a2d;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.categories {
  background-color: #4169e1;
  opacity: 10px;
}
.all_categories_content a {
  text-decoration: none;
  color: black;
}
</style>
