<script setup lang="ts">
import { ref } from "vue";
import BlogCard from "../components/BlogCard.vue";
import Button from "../components/Button.vue";
import Modal from "../components/Modal.vue";
import { PlusIcon } from "@heroicons/vue/16/solid";

const isModalOpen = ref(false);
const postTitle = ref("");
const selectedImage = ref<File | null>(null);

const blogPosts = [
 {
  id: 1,
  title: "My First Blog",
  post: "This is the intro to my blog post.",
  username: "jane_doe",
  date: "2023-10-01",
 },
 {
  id: 2,
  title: "Vue is Awesome",
  post: "Here's why I love Vue.js so much...",
  username: "john_doe",
  date: "2023-10-01",
 },
];

const handleCreateNewPost = () => {
 // check if user is login or not
 // redirect to login page in order to create new post
 isModalOpen.value = true;
 console.log("Creating new post");
};

const closeModal = () => {
 isModalOpen.value = false;
 // Reset form when closing
 postTitle.value = "";
 selectedImage.value = null;
};

const handleCreatePost = () => {
 if (!postTitle.value.trim()) {
  alert("Please enter a title for your post");
  return;
 }

 console.log("Creating post with:", {
  title: postTitle.value,
  image: selectedImage.value?.name || "No image",
 });

 // Add your post creation logic here
 alert("Post created successfully!");
 closeModal();
};

const handleImageUpload = (event: Event) => {
 const target = event.target as HTMLInputElement;
 if (target.files && target.files[0]) {
  selectedImage.value = target.files[0];
 }
};
</script>

<template>
 <div class="h-screen px-40 bg-violet-50">
  <div class="flex justify-between items-center">
   <p>Blogs Listings</p>
   <Button type="button" @click="handleCreateNewPost" class="flex items-center gap-2">
    <PlusIcon class="w-4 h-4" /> Create New Post
   </Button>
  </div>
  <div class="grid gap-6 pt-5">
   <BlogCard
    v-for="post in blogPosts"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :post="post.post"
    :username="post.username"
    :date="post.date"
   />
  </div>
  <Modal :isOpen="isModalOpen" :onClose="closeModal" label="Create Post">
   <template #default>
    <form @submit.prevent="handleCreatePost" class="space-y-4">
     <div>
      <input
       type="text"
       v-model="postTitle"
       placeholder="Post Title"
       class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
       required
      />
     </div>
     <div>
      <input
       type="file"
       @change="handleImageUpload"
       accept="image/*"
       class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     </div>
     <div class="flex justify-end gap-2 mt-4">
      <button
       type="button"
       @click="closeModal"
       class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
      >
       Cancel
      </button>
      <button
       type="submit"
       class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
       Create Post
      </button>
     </div>
    </form>
   </template>
  </Modal>
 </div>
</template>
