<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
</script>

<template>
  <div class="d-flex align-center flex-wrap gap-4">
    <VAvatar
      size="x-small"
      :image="avatar1"
    />
    <VAvatar
      size="small"
      :image="avatar2"
    />
    <VAvatar :image="avatar3" />
    <VAvatar
      size="large"
      :image="avatar4"
    />
    <VAvatar
      size="x-large"
      :image="avatar5"
    />
    <VAvatar
      size="65"
      :image="avatar6"
    />
    <VAvatar
      size="75"
      :image="avatar7"
    />
  </div>
</template>
