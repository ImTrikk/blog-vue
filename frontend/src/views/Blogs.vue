<script setup lang="ts">
import { ref } from "vue";
import BlogCard from "../components/BlogCard.vue";
import Button from "../components/Button.vue";
import Modal from "../components/Modal.vue";
import { PlusIcon, PhotoIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const isModalOpen = ref(false);
const postTitle = ref("");
const postContent = ref("");
const selectedImage = ref<File | null>(null);
const imagePreview = ref<string | null>(null);

const blogPosts = [
 {
  id: 1,
  title: "Getting Started with TypeScript",
  post: "TypeScript adds static typing to JavaScript, making it more robust...",
  username: "tech_sarah",
  date: "2023-12-15",
 },
 {
  id: 2,
  title: "Modern CSS Techniques",
  post: "Exploring CSS Grid, Flexbox, and Custom Properties...",
  username: "web_designer",
  date: "2023-12-10",
 },
 {
  id: 3,
  title: "REST API Best Practices",
  post: "Learn how to design clean and efficient REST APIs...",
  username: "api_expert",
  date: "2023-12-05",
 },
 {
  id: 4,
  title: "Frontend Testing Strategies",
  post: "Comprehensive guide to testing Vue.js applications...",
  username: "test_master",
  date: "2023-12-01",
 },
 {
  id: 5,
  title: "Vue 3 Composition API Deep Dive",
  post: "Exploring the power of Vue 3's Composition API and its benefits...",
  username: "vue_enthusiast",
  date: "2023-11-28",
 },
 {
  id: 6,
  title: "Web Performance Optimization",
  post: "Tips and tricks for improving your website's loading speed...",
  username: "perf_guru",
  date: "2023-11-25",
 },
 {
  id: 7,
  title: "State Management in Vue",
  post: "Comparing Vuex, Pinia and other state management solutions...",
  username: "state_master",
  date: "2023-11-22",
 },
 {
  id: 8,
  title: "Responsive Design Patterns",
  post: "Building websites that work seamlessly across all devices...",
  username: "design_pro",
  date: "2023-11-19",
 },
 {
  id: 9,
  title: "Authentication Best Practices",
  post: "Secure authentication implementations for modern web apps...",
  username: "security_expert",
  date: "2023-11-16",
 },
 {
  id: 10,
  title: "Git Workflow Strategies",
  post: "Effective branching and merging strategies for teams...",
  username: "git_master",
  date: "2023-11-13",
 },
 {
  id: 11,
  title: "Docker for Developers",
  post: "Getting started with containerization for web applications...",
  username: "docker_pro",
  date: "2023-11-10",
 },
 {
  id: 12,
  title: "API Security Fundamentals",
  post: "Protecting your APIs from common security threats...",
  username: "security_guru",
  date: "2023-11-07",
 },
 {
  id: 13,
  title: "Modern JavaScript Features",
  post: "Exploring ES2022 and beyond - new JavaScript capabilities...",
  username: "js_ninja",
  date: "2023-11-04",
 },
 {
  id: 14,
  title: "Web Accessibility Guidelines",
  post: "Making your web applications accessible to everyone...",
  username: "a11y_advocate",
  date: "2023-11-01",
 },
];

const handleCreateNewPost = () => {
 // check if user is login or not
 // redirect to login page in order to create new post
 isModalOpen.value = true;
 console.log("Creating new post");
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

  // Create preview
  const reader = new FileReader();
  reader.onload = (e) => {
   imagePreview.value = e.target?.result as string;
  };
  reader.readAsDataURL(target.files[0]);
 }
};

const removeImage = () => {
 selectedImage.value = null;
 imagePreview.value = null;
};

const closeModal = () => {
 isModalOpen.value = false;
 // Reset form when closing
 postTitle.value = "";
 postContent.value = "";
 selectedImage.value = null;
 imagePreview.value = null;
};
</script>

<template>
 <div class="min-h-screen px-4 lg:px-40 py-8 bg-violet-50 pt-28">
  <div class="flex justify-between items-center mb-8">
   <h1 class="text-3xl font-bold text-gray-800">Blogs</h1>
   <Button
    type="button"
    @click="handleCreateNewPost"
    class="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
   >
    <PlusIcon class="w-4 h-4" />
   </Button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

  <Modal :isOpen="isModalOpen" :onClose="closeModal" label="Create New Post">
   <template #default>
    <form @submit.prevent="handleCreatePost" class="space-y-6">
     <!-- Post Title -->
     <div>
      <label
       for="postTitle"
       class="block text-sm font-medium text-gray-700 mb-2"
      >
       Post Title *
      </label>
      <input
       id="postTitle"
       type="text"
       v-model="postTitle"
       placeholder="Enter your post title..."
       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
       required
      />
     </div>

     <!-- Post Content -->
     <div>
      <label
       for="postContent"
       class="block text-sm font-medium text-gray-700 mb-2"
      >
       Post Content *
      </label>
      <textarea
       id="postContent"
       v-model="postContent"
       placeholder="Write your post content here..."
       rows="4"
       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
       required
      ></textarea>
     </div>

     <!-- Image Upload -->
     <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
       Featured Image (Optional)
      </label>

      <!-- Image Preview -->
      <div v-if="imagePreview" class="mb-4 relative">
       <img
        :src="imagePreview"
        alt="Preview"
        class="w-full h-48 object-cover rounded-lg border border-gray-200"
       />
       <button
        type="button"
        @click="removeImage"
        class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
       >
        <XMarkIcon class="w-4 h-4" />
       </button>
      </div>

      <!-- Upload Area -->
      <div
       v-if="!imagePreview"
       class="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors"
      >
       <PhotoIcon class="w-12 h-12 text-gray-400 mx-auto mb-3" />
       <p class="text-sm text-gray-600 mb-2">
        <label
         for="fileInput"
         class="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
        >
         Click to upload
        </label>
        or drag and drop
       </p>
       <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
       <input
        id="fileInput"
        type="file"
        @change="handleImageUpload"
        accept="image/*"
        class="sr-only"
       />
      </div>
     </div>

     <!-- Action Buttons -->
     <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
      <button
       type="button"
       @click="closeModal"
       class="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
      >
       Cancel
      </button>
      <button
       type="submit"
       :disabled="!postTitle.trim() || !postContent.trim()"
       class="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
       Create Post
      </button>
     </div>
    </form>
   </template>
  </Modal>
 </div>
</template>
