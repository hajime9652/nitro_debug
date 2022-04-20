<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  PlusSmIcon,
  StarIcon,
  ChevronUpIcon,
} from '@heroicons/vue/solid';

import { Content } from '~~/server/api/contents';

type Props = {
  question: Content,
};
const { question } = defineProps<Props>();
</script>

<template>
  <article :aria-labelledby="'question-title-' + question.id" class="px-4 py-1 sm:p-6 sm:rounded-lg">
    <div>
      <div class="flex space-x-3">
        <div class="grow">
          <p class="text-xs mb-3">
            {{ question.type }}
          </p>
          <h1 :id="'question-title-' + question.id" class="text-xl font-medium">
              {{ question.title }}
          </h1>
        </div>
        <div class="flex-shrink-0 self-center flex">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="-m-2 p-2 rounded-full flex items-center text-gray-200 hover:text-gray-100">
                <span class="sr-only">Open options</span>
                <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                      <StarIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>お気に入り</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                      <CodeIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>共有リンクコピー</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                      <FlagIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>運営に報告</span>
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <div class="mt-2 text-sm text-gray-700 space-y-4" v-html="question.body" />
    <div class="mt-6 flex justify-between space-x-8">
      <div class="flex space-x-2" v-if="question.author && question.actionFlag">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="question.author.imageUrl" alt="" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-200">
            <a :href="question.author.href" class="hover:underline">{{ question.author.name }}</a>
          </p>
          <p class="text-sm text-gray-200">
            <a :href="question.href" class="hover:underline">
              <time :datetime="question.datetime">{{ question.date }}</time>
            </a>
          </p>
        </div>
        <span class="pl-5 inline-flex items-end -mb-1 text-base"> 
          <div class="flex-shrink-0">
            <button type="button" class="inline-flex items-end px-3 py-0.5 -mb-2 rounded-full bg-slate-500 text-sm font-medium text-gray-200 hover:bg-teal-500">
              <PlusSmIcon class="-ml-1 mr-0.5 h-5 w-5" aria-hidden="true" />
              <span>
                返信
              </span>
            </button>
          </div>
        </span>
        <!-- <span class="inline-flex items-center text-sm">
          <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
            <ChatAltIcon class="h-5 w-5" aria-hidden="true" />
            <span class="font-medium text-gray-900">{{ question.replies }}</span>
            <span class="sr-only">replies</span>
          </button>
        </span> -->
        <!-- <span class="inline-flex items-center text-sm">
          <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
            <EyeIcon class="h-5 w-5" aria-hidden="true" />
            <span class="font-medium text-gray-900">{{ question.views }}</span>
            <span class="sr-only">views</span>
          </button>
        </span> -->
      </div>
      <div class="flex text-sm">
        <span class="inline-flex items-end space-x-4">
          <!-- <v-button-likes amount=18 /> -->
          <!-- <v-button-share label="Share" /> -->
        </span>
      </div>
    </div>
  </article>
</template>
