<template>
  <div>
    <el-upload
      v-model:file-list="fileList"
      drag
      multiple
      class="pure-upload"
      list-type="picture-card"
      accept="image/jpeg,image/png,image/gif"
      action="https://run.mocky.io/v3/3aa761d7-b0b3-4a03-96b3-6168d4f7467b"
      :limit="3"
      :headers="{ Authorization: 'eyJhbGciOiJIUzUxMiJ9.admin' }"
      :on-exceed="onExceed"
      :before-upload="onBefore"
    >
      <IconifyIconOffline :icon="Add" class="m-auto mt-4" width="30" />
      <template #file="{ file }">
        <div
          v-if="file.status == 'ready' || file.status == 'uploading'"
          class="mt-[35%] m-auto"
        >
          <p class="font-medium">文件上传中</p>
          <el-progress
            class="mt-2"
            :stroke-width="2"
            :text-inside="true"
            :show-text="false"
            :percentage="file.percentage"
          />
        </div>
        <div v-else @mouseenter.stop="imgDrop(file.uid)">
          <img
            class="el-upload-list__item-thumbnail select-none"
            :src="file.url"
          />
          <!-- 可以根据需求，添加其他操作按钮 -->
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Sortable from "sortablejs";

const fileList = ref([]);

const getUploadItem = () => document.querySelectorAll("#pure-upload-item");

/** 缩略图拖拽排序 */
const imgDrop = uid => {
  const CLASSNAME = "el-upload-list";
  const _curIndex = fileList.value.findIndex(img => img.uid === uid);
  getUploadItem()?.[_curIndex]?.classList?.add(`${CLASSNAME}__item-actions`);
  const wrapper: HTMLElement = document.querySelector(`.${CLASSNAME}`);
  Sortable.create(wrapper, {
    handle: `.${CLASSNAME}__item`,
    onEnd: ({ newIndex, oldIndex }) => {
      const oldFile = fileList.value[oldIndex];
      fileList.value.splice(oldIndex, 1);
      fileList.value.splice(newIndex, 0, oldFile);
      // fix: https://github.com/SortableJS/Sortable/issues/232 (firefox is ok, but chromium is bad. see https://bugs.chromium.org/p/chromium/issues/detail?id=410328)
      getUploadItem().forEach(ele => {
        ele.classList.remove(`${CLASSNAME}__item-actions`);
      });
    }
  });
};
</script>